import { defineComponent } from 'vue';
import {
    computePosition,
    offset as offsetMiddleware,
    arrow as arrowMiddleware,
    shift as shiftMiddleware,
    flip as flipMiddleware
} from '@floating-ui/dom';
import { Placement } from '@floating-ui/core';

export const sameWidthModifier = () => ({
    name: 'sameWidth',
    fn: (middlewareArguments: any) => {
        // state.styles.popper.width = `${state.rects.reference.width}px`;
        console.log(middlewareArguments);

        return {};
    }
});

export const useBaseMiddleware = ({
    offset,
    arrow
}: {
    offset: number;
    arrow: HTMLElement;
}) => [
    offsetMiddleware(offset),
    arrowMiddleware({
        element: arrow
    }),
    shiftMiddleware(),
    flipMiddleware(),
    // sameWidthModifier()
];

/**
 * @param {HTMLElement} [popupElement=$refs.overlay]
 * The HTML element used as overlay, or a configuration used to generate the overlay.
 * @param {String} [placement=auto]
 * Placement of the overlay, accepted values:
 *  - auto(-start, -end)
 *  - top(-start, -end)
 *  - right(-start, -end)
 *  - bottom(-start, -end)
 *  - left(-start, -end)
 * @param {Boolean} [visible=false]
 * Visibility of the overlay
 * @param {Number} [offset=0]
 * Amount of pixels the overlay will be shifted (can be negative).
 */

export default defineComponent({
    data () {
        return {
            popupStyles: {
                position: 'fixed',
                top: '0',
                left: '0'
            },
            arrowStyles: {
                position: 'fixed',
                top: '0',
                left: '0'
            }
        };
    },
    props: {
        placement: {
            type: String,
            default: 'auto' as Placement
        },
        offset: {
            type: Number,
            default: 6
        },
        popperOptions: {
            type: Object,
            default: () => ({})
        }
    },
    watch: {
        placement () {
            this.createPopper();
        }
    },
    beforeUnmount () {
        this.destroyPopper();
    },
    methods: {
        createPopper () {
            if (typeof window === 'undefined') {
                return;
            }

            const arrow = (this as any).$refs.arrow;
            const middleware = useBaseMiddleware({
                offset: this.offset,
                arrow
            });

            computePosition(
                (this as any).$refs.wrapper,
                (this as any).$refs.popup,
                {
                    strategy: 'fixed',
                    placement: this.placement as Placement,
                    middleware,
                    ...this.popperOptions
                }
            ).then(({ x, y, middlewareData }) => {
                this.popupStyles.left = `${x}px`;
                this.popupStyles.top = `${y}px`;

                if (arrow) {
                    const { x: arrowX, y: arrowY } = middlewareData.arrow as any;

                    this.popupStyles.left = `${arrowX}px`;
                    this.popupStyles.top = `${arrowY}px`;
                }
            });
        },
        destroyPopper () {
            this.popupStyles.left = '0';
            this.popupStyles.top = '0';
            this.arrowStyles.top = '0';
            this.arrowStyles.top = '0';
        }
    }
});

import { mount } from '@vue/test-utils';
import Column from 'inkline/components/Column';

describe('Components', () => {
    describe('Column', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(Column);
        });

        it('should render correctly', () => {
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
});

import IFormGroup from 'inkline/components/FormGroup';

import AttributesProviderMixin from 'inkline/mixins/components/providers/AttributesProviderMixin';
import ClassesProviderMixin from 'inkline/mixins/components/providers/ClassesProviderMixin';
import InjectParentFormProviderMixin from 'inkline/mixins/forms/providers/InjectParentFormProviderMixin';
import ModelProviderMixin from 'inkline/mixins/forms/providers/ModelProviderMixin';
import SchemaProviderMixin from 'inkline/mixins/forms/providers/SchemaProviderMixin';

import ClickInputRefMethodMixin from 'inkline/mixins/forms/methods/ClickInputRefMethodMixin';
import FocusInputRefMethodMixin from 'inkline/mixins/forms/methods/FocusInputRefMethodMixin';
import EmitChangeMethodMixin from 'inkline/mixins/components/methods/EmitChangeMethodMixin';
import EmitClickMethodMixin from 'inkline/mixins/components/methods/EmitClickMethodMixin';
import EmitFocusMethodMixin from 'inkline/mixins/components/methods/EmitFocusMethodMixin';
import EmitHoverMethodMixin from 'inkline/mixins/components/methods/EmitHoverMethodMixin';
import EmitInputMethodMixin from 'inkline/mixins/components/methods/EmitInputMethodMixin';
import EmitKeydownMethodMixin from 'inkline/mixins/components/methods/EmitKeydownMethodMixin';

import ClearablePropertyMixin from 'inkline/mixins/forms/properties/ClearablePropertyMixin';
import DisabledPropertyMixin from 'inkline/mixins/forms/properties/DisabledPropertyMixin';
import NamePropertyMixin from 'inkline/mixins/forms/properties/NamePropertyMixin';
import ParentFormGroupPropertyMixin from 'inkline/mixins/forms/properties/ParentFormGroupPropertyMixin';
import ReadonlyPropertyMixin from 'inkline/mixins/forms/properties/ReadonlyPropertyMixin';
import SizePropertyMixin from 'inkline/mixins/components/properties/SizePropertyMixin';
import TabIndexPropertyMixin from 'inkline/mixins/components/properties/TabIndexPropertyMixin';

export default {
    name: 'IInput',
    inheritAttrs: false,
    components: {
        IFormGroup
    },
    mixins: [
        AttributesProviderMixin,
        ClassesProviderMixin,
        InjectParentFormProviderMixin,
        ModelProviderMixin,
        SchemaProviderMixin,

        ClickInputRefMethodMixin,
        FocusInputRefMethodMixin,
        EmitChangeMethodMixin,
        EmitClickMethodMixin,
        EmitFocusMethodMixin,
        EmitHoverMethodMixin,
        EmitInputMethodMixin,
        EmitKeydownMethodMixin,

        ClearablePropertyMixin,
        DisabledPropertyMixin,
        NamePropertyMixin,
        ParentFormGroupPropertyMixin,
        ReadonlyPropertyMixin,
        SizePropertyMixin,
        TabIndexPropertyMixin
    ],
    created () {
        this.classesProvider.add('root', () => ({
            '-prepended': this.$slots.prepend || this.prepended,
            '-appended': this.$slots.append || this.appended
        }));

        this.classesProvider.add('child', () => ({
            '-prefixed': this.$slots.prefix,
            '-suffixed': this.$slots.suffix
        }));
    }
};

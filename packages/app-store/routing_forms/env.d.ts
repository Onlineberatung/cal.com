declare module "react-awesome-query-builder/lib/config/basic";
declare module "react-awesome-query-builder/lib/codnfig/basic" {
	export interface IBasicConfig {
		conjunctions: Conjunctions;
		operators: Operators;
		types: Types;
		widgets: Widgets;
		settings: Settings;
	}
	let BasicConfig:IBasicConfig;
	export default BasicConfig;
	export interface Conjunctions {
		AND: ANDOrOR;
		OR: ANDOrOR;
	}
	export interface ANDOrOR {
		label: string;
		mongoConj: string;
		jsonLogicConj: string;
		sqlConj: string;
		spelConj: string;
		spelConjs?: (string)[] | null;
		reversedConj: string;
	}
	export interface Operators {
		equal: EqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrSelectEquals;
		not_equal: NotEqualOrSelectNotEquals;
		less: EqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrSelectEquals;
		less_or_equal: EqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrSelectEquals;
		greater: EqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrSelectEquals;
		greater_or_equal: EqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrSelectEquals;
		like: Like;
		not_like: NotLike;
		starts_with: StartsWithOrEndsWith;
		ends_with: StartsWithOrEndsWith;
		between: Between;
		not_between: NotBetween;
		is_empty: IsEmpty;
		is_not_empty: IsNotEmpty;
		is_null: unknown;
		proximity: unknown;
		is_not_null:unknown;
		select_equals: EqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrSelectEquals;
		select_not_equals: NotEqualOrSelectNotEquals;
		select_any_in: SelectAnyIn;
		select_not_any_in: SelectNotAnyInOrMultiselectNotEquals;
		multiselect_equals: MultiselectEquals;
		multiselect_not_equals: SelectNotAnyInOrMultiselectNotEquals;
		some: SomeOrAllOrNone;
		all: SomeOrAllOrNone;
		none: SomeOrAllOrNone;
	}
	export interface EqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrSelectEquals {
		label: string;
		labelForFormat: string;
		sqlOp: string;
		spelOp: string;
		spelOps?: (string)[] | null;
		reversedOp: string;
		jsonLogic: string;
		elasticSearchQueryType: string;
	}
	export interface NotEqualOrSelectNotEquals {
		isNotOp: boolean;
		label: string;
		labelForFormat: string;
		sqlOp: string;
		spelOp: string;
		spelOps?: (string)[] | null;
		reversedOp: string;
		jsonLogic: string;
	}
	export interface Like {
		label: string;
		labelForFormat: string;
		reversedOp: string;
		sqlOp: string;
		spelOp: string;
		spelOps?: (string)[] | null;
		jsonLogic: string;
		_jsonLogicIsRevArgs: boolean;
		valueSources?: (string)[] | null;
		elasticSearchQueryType: string;
	}
	export interface NotLike {
		isNotOp: boolean;
		label: string;
		reversedOp: string;
		labelForFormat: string;
		sqlOp: string;
		valueSources?: (string)[] | null;
	}
	export interface StartsWithOrEndsWith {
		label: string;
		labelForFormat: string;
		sqlOp: string;
		spelOp: string;
		spelOps?: (string)[] | null;
		valueSources?: (string)[] | null;
	}
	export interface Between {
		label: string;
		labelForFormat: string;
		sqlOp: string;
		cardinality: number;
		valueLabels?: (string)[] | null;
		textSeparators?: (string | null)[] | null;
		reversedOp: string;
		jsonLogic: string;
	}
	export interface NotBetween {
		isNotOp: boolean;
		label: string;
		labelForFormat: string;
		sqlOp: string;
		cardinality: number;
		valueLabels?: (string)[] | null;
		textSeparators?: (string | null)[] | null;
		reversedOp: string;
	}
	export interface IsEmpty {
		label: string;
		labelForFormat: string;
		cardinality: number;
		reversedOp: string;
		jsonLogic: string;
	}
	export interface IsNotEmpty {
		isNotOp: boolean;
		label: string;
		labelForFormat: string;
		cardinality: number;
		reversedOp: string;
		jsonLogic: string;
		elasticSearchQueryType: string;
	}
	export interface SelectAnyIn {
		label: string;
		labelForFormat: string;
		sqlOp: string;
		spelOp: string;
		reversedOp: string;
		jsonLogic: string;
		elasticSearchQueryType: string;
	}
	export interface SelectNotAnyInOrMultiselectNotEquals {
		isNotOp: boolean;
		label: string;
		labelForFormat: string;
		sqlOp: string;
		reversedOp: string;
	}
	export interface MultiselectEquals {
		label: string;
		labelForFormat: string;
		sqlOp: string;
		spelOp: string;
		reversedOp: string;
		jsonLogic2: string;
		elasticSearchQueryType: string;
	}
	export interface SomeOrAllOrNone {
		label: string;
		labelForFormat: string;
		cardinality: number;
		jsonLogic: string;
	}
	export interface Types {
		text: TextOrPhoneOrEmail;
		number: number;
		date: Date;
		time: Time;
		datetime: Datetime;
		select: Select;
		multiselect: Multiselect;
		boolean: boolean;
		group: !group;
		case_value: CaseValue;
		phone: TextOrPhoneOrEmail;
		email: TextOrPhoneOrEmail;
	}
	export interface TextOrPhoneOrEmail {
		defaultOperator: string;
		mainWidget: string;
		widgets: Widgets1;
	}
	export interface Widgets1 {
		text: TextOrTextarea;
		textarea: TextOrTextarea;
		field: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface TextOrTextarea {
		operators?: (string)[] | null;
		widgetProps: WidgetPropsOrOpPropsOrCaseValueOrCustomProps;
		opProps: WidgetPropsOrOpPropsOrCaseValueOrCustomProps;
	}
	export interface WidgetPropsOrOpPropsOrCaseValueOrCustomProps {
	}
	export interface FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect {
		operators?: (string)[] | null;
	}
	export interface Number {
		defaultOperator: string;
		mainWidget: string;
		widgets: Widgets2;
	}
	export interface Widgets2 {
		number: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
		slider: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface Date {
		defaultOperator: string;
		widgets: Widgets3;
	}
	export interface Widgets3 {
		date: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface Time {
		defaultOperator: string;
		widgets: Widgets4;
	}
	export interface Widgets4 {
		time: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface Datetime {
		defaultOperator: string;
		widgets: Widgets5;
	}
	export interface Widgets5 {
		datetime: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface Select {
		mainWidget: string;
		defaultOperator: string;
		widgets: Widgets6;
	}
	export interface Widgets6 {
		select: Select1;
		multiselect: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface Select1 {
		operators?: (string)[] | null;
		widgetProps: WidgetProps;
	}
	export interface WidgetProps {
		customProps: CustomPropsOrCustomFieldSelectProps;
	}
	export interface CustomPropsOrCustomFieldSelectProps {
		showSearch: boolean;
	}
	export interface Multiselect {
		defaultOperator: string;
		widgets: Widgets7;
	}
	export interface Widgets7 {
		multiselect: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface Boolean {
		defaultOperator: string;
		widgets: Widgets8;
	}
	export interface Widgets8 {
		boolean: Boolean1;
		field: FieldOrNumberOrSliderOrDateOrTimeOrDatetimeOrMultiselect;
	}
	export interface Boolean1 {
		operators?: (string)[] | null;
		widgetProps: WidgetPropsOrOpPropsOrCaseValueOrCustomProps;
	}
	export interface group {
		defaultOperator: string;
		mainWidget: string;
		widgets: Widgets9;
	}
	export interface Widgets9 {
		number: Number1;
	}
	export interface Number1 {
		widgetProps: WidgetProps1;
		operators?: (string)[] | null;
		opProps: OpProps;
	}
	export interface WidgetProps1 {
		min: number;
	}
	export interface OpProps {
		equal: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		not_equal: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		less: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		less_or_equal: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		greater: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		greater_or_equal: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		between: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		not_between: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
	}
	export interface EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue {
		label: string;
	}
	export interface CaseValue {
		mainWidget: string;
		widgets: Widgets10;
	}
	export interface Widgets10 {
		case_value: WidgetPropsOrOpPropsOrCaseValueOrCustomProps;
	}
	export interface Widgets {
		text: TextOrSliderOrSelectOrMultiselectOrPhoneOrEmail;
		textarea: Textarea;
		number: Number2;
		slider: TextOrSliderOrSelectOrMultiselectOrPhoneOrEmail;
		select: TextOrSliderOrSelectOrMultiselectOrPhoneOrEmail;
		multiselect: TextOrSliderOrSelectOrMultiselectOrPhoneOrEmail;
		date: Date1;
		time: Time1;
		datetime: Datetime1;
		boolean: Boolean2;
		field: Field;
		func: Func;
		case_value: CaseValue1;
		phone: TextOrSliderOrSelectOrMultiselectOrPhoneOrEmail;
		email: TextOrSliderOrSelectOrMultiselectOrPhoneOrEmail;
	}
	export interface TextOrSliderOrSelectOrMultiselectOrPhoneOrEmail {
		type: string;
		jsType: string;
		valueSrc: string;
		valueLabel: string;
		valuePlaceholder: string;
	}
	export interface Textarea {
		type: string;
		jsType: string;
		valueSrc: string;
		valueLabel: string;
		valuePlaceholder: string;
		fullWidth: boolean;
	}
	export interface Number2 {
		type: string;
		jsType: string;
		valueSrc: string;
		valueLabel: string;
		valuePlaceholder: string;
		valueLabels?: (ValueLabelsEntity)[] | null;
	}
	export interface ValueLabelsEntity {
		label: string;
		placeholder: string;
	}
	export interface Date1 {
		type: string;
		jsType: string;
		valueSrc: string;
		dateFormat: string;
		valueFormat: string;
		useKeyboard: boolean;
		valueLabel: string;
		valuePlaceholder: string;
		valueLabels?: (ValueLabelsEntity)[] | null;
	}
	export interface Time1 {
		type: string;
		jsType: string;
		valueSrc: string;
		timeFormat: string;
		valueFormat: string;
		use12Hours: boolean;
		useKeyboard: boolean;
		valueLabel: string;
		valuePlaceholder: string;
		valueLabels?: (ValueLabelsEntity)[] | null;
	}
	export interface Datetime1 {
		type: string;
		jsType: string;
		valueSrc: string;
		timeFormat: string;
		dateFormat: string;
		valueFormat: string;
		use12Hours: boolean;
		useKeyboard: boolean;
		valueLabel: string;
		valuePlaceholder: string;
		valueLabels?: (ValueLabelsEntity)[] | null;
	}
	export interface Boolean2 {
		type: string;
		jsType: string;
		valueSrc: string;
		labelYes: string;
		labelNo: string;
		defaultValue: boolean;
	}
	export interface Field {
		valueSrc: string;
		valueLabel: string;
		valuePlaceholder: string;
		customProps: CustomPropsOrCustomFieldSelectProps;
	}
	export interface Func {
		valueSrc: string;
		valueLabel: string;
		valuePlaceholder: string;
		customProps: WidgetPropsOrOpPropsOrCaseValueOrCustomProps;
	}
	export interface CaseValue1 {
		valueSrc: string;
		type: string;
	}
	export interface ValueSourcesInfo {
		value: EqualOrNotEqualOrLessOrLessOrEqualOrGreaterOrGreaterOrEqualOrBetweenOrNotBetweenOrValue;
		field: FieldOrFunc;
		func: FieldOrFunc;
	}
	export interface FieldOrFunc {
		label: string;
		widget: string;
	}
	export interface ConvertableWidgets {
		number?: (string)[] | null;
		slider?: (string)[] | null;
		rangeslider?: (string)[] | null;
		text?: (string)[] | null;
		textarea?: (string)[] | null;
	}
	export interface Locale {
		moment: string;
	}
	export interface JsonLogic {
		groupVarKey: string;
		altVarKey: string;
		lockedOp: string;
	}
}
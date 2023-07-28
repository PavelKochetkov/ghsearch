export interface IDataSearch {
    input: string
    handleValue: React.ChangeEventHandler
    onSubmitSearch: React.KeyboardEventHandler
    blurHandler: React.FocusEventHandler
    valueDirty: boolean
}
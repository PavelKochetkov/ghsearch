export interface IDataSearch {
    input: string
    handleValue: React.ChangeEventHandler
    onSubmitSearch: () => void
    blurHandler: React.FocusEventHandler
    valueDirty: boolean
}
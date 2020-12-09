/**
 * useEditorTitle
 * @param name the title without edit or create
 * @param data the data to check, if exist, the title will be add 'edit' prefix, if not, will add 'create'
 */
export declare const useEditorTitle: (name: string, data: any) => () => string;

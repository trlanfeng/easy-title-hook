/**
 * useEditorTitle
 * @param name the title without edit or create
 * @param data the data to check, if exist, the title will be add 'edit' prefix, if not, will add 'create'
 */
export const useEditorTitle = (name: string, data: any) => {
  const title = () => {
    if (data) return `编辑${name}`;
    return `新建${name}`;
  };
  return title;
};

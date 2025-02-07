export const currentPage = (arr:any[], pages:string[], tab:number) => arr.filter((e) => e.page === pages[tab]);

export const hasEmptyFields = (arr, pages, tab, form, setErrorMessages) => {
    const currentFields = currentPage(arr, pages, tab);
    const emptyFields = currentFields.filter(
      (field) => !form[field.name] || form[field.name].trim() === ""
    );
    setErrorMessages(
      emptyFields.map((field) => `${field.placeholder} is required.`)
    );
    return emptyFields.length > 0;
};

export const switchTab = ( arr, tab, pages, form, setErrorMessages, setTab, handleSubmit) => {
  setErrorMessages([]);
  if (hasEmptyFields(arr, pages, tab,form, setErrorMessages)) {
    return;
  }
  if (tab < pages.length - 1) {
      setTab((prev) => prev + 1);
      window.scrollTo(0, 0);
  } 

  else {
      handleSubmit();
  }
};
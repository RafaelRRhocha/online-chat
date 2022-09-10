export const readLocalStorage = () => {
  const response = localStorage.getItem('storage');
  if (response) {
    return JSON.parse(response);
  } return null;
};

export const saveLocalStorage = (local) => {
  const respFavorite = readLocalStorage();
  if (respFavorite) {
    localStorage.setItem('storage', (
      JSON.stringify([...respFavorite, local])
    ));
  } else {
    localStorage.setItem('storage', JSON.stringify([local]));
  }
};

export const removeLocalStorage = (id) => {
  const respFavorite = readLocalStorage();
  localStorage.setItem('storage', (
    JSON.stringify(respFavorite.filter((e) => e.id !== id))
  ));
};
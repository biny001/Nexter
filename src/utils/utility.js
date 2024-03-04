export function formatYear(currDate) {
  const options = {
    year: "numeric",
  };

  const formattedYear = new Date(currDate).toLocaleDateString("en-US", options);
  return formattedYear;
}

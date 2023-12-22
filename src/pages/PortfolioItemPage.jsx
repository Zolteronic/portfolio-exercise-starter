export const PortfolioItemPage = ({ selectedItem }) => {
  return (
    <>
      <h1>Portfolio Item Page</h1>
      <p>{selectedItem.title}</p>
      <p>{selectedItem.description}</p>
      <img
        src={selectedItem.imageUrl}
        alt={selectedItem.title}
        height="450px"
        width="700px"
      />
    </>
  );
};

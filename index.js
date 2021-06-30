const petsList = document.getElementById("petsList");
const searchBar = document.getElementById("searchBar");
let pets = [];
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredPets = pets.filter((pet) => {
    return pet.name.toLowerCase().includes(searchString);
  });
  displayPets(filteredPets);
});

const loadPets = async () => {
  try {
    const res = await fetch(
      "https://60d075407de0b20017108b89.mockapi.io/api/v1/animals"
    );
    pets = await res.json();
    displayPets(pets);
  } catch (err) {
    console.error(err);
  }
};

const displayPets = (allpets) => {
  const htmlString = allpets

    .map((pet) => {
      return `
      <div className="col-12 col-md-4 mt-5 border">
      <div className="card p-2 text-dark shadow-lg p-3 mb-5 bg-white rounded">
        <div className="d-flex align-items-center">
          
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0 textLeft"> ${pet.name} </h4>
            <span className="text-left text-secondary">
              ${pet.bornAt}
            </span>
          </div>
        </div>
      </div>
    </div>
        `;
    })
    .join("");
  petsList.innerHTML = htmlString;
};

loadPets();

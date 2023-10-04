const Searchbar = () => {
  return (
    <>
      <div className="input-group flex-nowrap" style={{marginTop:".5rem"}}>
        <input
          type="text"
          class="form-control"
          placeholder="search...."
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </>
  );
};

export default Searchbar;

import CardList from "../cardList";

function Trending() {
  return (
    <div className="max-w-[1185px] mx-auto mb-20 md:p-0 px-6">
      <h2 className="capitalize text-[24px] md:text-4xl font-[700]">
        Browser our trending
      </h2>
      <h2 className="capitalize text-[24px] md:text-4xl font-[700] text-theme-greeny-2 mb-10">
        Receipt
      </h2>
      <CardList />
      <div className=" hidden md:block text-center">
        <button className="button-raw-primary inline-block px-6 py-2">
          ALL Receipt
        </button>
      </div>
    </div>
  );
}

export default Trending;

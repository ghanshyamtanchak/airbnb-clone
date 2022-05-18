import Footer from "components/Footer";
import Header from "components/Header";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">300+ Stays for 5 number of guest</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="searchButton">Cancellation Flexibility</p>
            <p className="searchButton">Type of Place</p>
            <p className="searchButton">Price</p>
            <p className="searchButton">Rooms and Beds</p>
            <p className="searchButton">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

import Image from "next/image";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { AirbnbLogo } from "assets/images";
import { FC, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/router";

export interface Props {
  placeholder?: string;
}

const Header: FC<Props> = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();

  const handleChange = (rangesByKey: RangeKeyDict) => {
    setStartDate(rangesByKey.selection.startDate);
    setEndDate(rangesByKey.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate?.toISOString(),
        endDate: endDate?.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 bg-white md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center cursor-pointer my-auto h-10"
      >
        <Image
          src={AirbnbLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent flex-grow pl-5 outline-none text-sm placeholder-gray-400 text-gray-600"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 h-8 p-2 rounded-full text-white cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Becom a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleChange}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UserIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(+e.target.value)}
              type="number"
              min={1}
              className="w-12 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

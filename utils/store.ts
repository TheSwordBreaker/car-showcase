import { atom, useAtom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import { FilterProps } from "./types";
import { fetchCars } from "./helper";

const filterAtom = atom<FilterProps>({
	manufacturer: "",
	year: 2022,
	fuel: "",
	limit: 10,
	model: "",
});

const [carAtom] = atomsWithQuery((get: any) => ({
	queryKey: ["car", get(filterAtom)],
	queryFn: async ({ queryKey: [, FilterAtom] }: any) => {
		const allCars = await fetchCars(FilterAtom);
		return allCars;
	},
}));

export { carAtom, filterAtom };

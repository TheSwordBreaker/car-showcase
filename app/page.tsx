import { CustomFilter, Hero, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";

import { fuels, yearsOfProduction } from "@/utils/constants";
import { fetchCars } from "@/utils/helper";
import { HomeProps } from "@/utils/types";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || "",
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || "",
		limit: searchParams.limit || 10,
		model: searchParams.model || "",
	});

	console.log(allCars);
	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="max-width mt-12 padding-x padding-y" id="discover">
				<div className="home__text-container">
					<h1 className="font-extrabold text-4xl">Car Catalogue</h1>
					<p>Explore out cars you might like</p>
				</div>

				<div className="home__filters">
					<SearchBar />

					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars?.map((car) => (
								<CarCard car={car} />
							))}
						</div>

						<ShowMore
							pageNumber={(searchParams.limit || 10) / 10}
							isNext={(searchParams.limit || 10) > allCars.length}
						/>
					</section>
				) : (
					<div className="home__error-container">
						<h2 className="font-bold text-black text-xl">
							Oops, no results
						</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}

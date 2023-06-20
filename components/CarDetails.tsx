import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils/helper";
import { CarProps } from "@/utils/types";

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="z-10 relative" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="bg-black bg-opacity-25 inset-0 fixed" />
					</Transition.Child>

					<div className="inset-0 fixed overflow-y-auto">
						<div className="flex min-h-full text-center p-4 items-center justify-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-out duration-300"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="bg-white flex flex-col max-w-lg rounded-2xl shadow-xl text-left w-full max-h-[90vh] p-6 transform transition-all gap-5 relative overflow-y-auto">
									<button
										type="button"
										className="rounded-full bg-primary-blue-100 w-fit p-2 top-2 right-2 z-10 absolute"
										onClick={closeModal}
									>
										<Image
											src="/close.svg"
											alt="close"
											width={20}
											height={20}
											className="object-contain"
										/>
									</button>

									<div className="flex flex-col flex-1 gap-3">
										<div className="bg-pattern bg-cover bg-center rounded-lg h-40 w-full relative">
											<Image
												src={generateCarImageUrl(car)}
												alt="car model"
												fill
												priority
												className="object-contain"
											/>
										</div>

										<div className="flex gap-3">
											<div className="rounded-lg bg-primary-blue-100 flex-1 h-24 w-full relative">
												<Image
													src={generateCarImageUrl(
														car,
														"29"
													)}
													alt="car model"
													fill
													priority
													className="object-contain"
												/>
											</div>
											<div className="rounded-lg bg-primary-blue-100 flex-1 h-24 w-full relative">
												<Image
													src={generateCarImageUrl(
														car,
														"33"
													)}
													alt="car model"
													fill
													priority
													className="object-contain"
												/>
											</div>
											<div className="rounded-lg bg-primary-blue-100 flex-1 h-24 w-full relative">
												<Image
													src={generateCarImageUrl(
														car,
														"13"
													)}
													alt="car model"
													fill
													priority
													className="object-contain"
												/>
											</div>
										</div>
									</div>

									<div className="flex flex-col flex-1 gap-2">
										<h2 className="font-semibold text-xl capitalize">
											{car.make} {car.model}
										</h2>

										<div className="flex flex-wrap mt-3 gap-4">
											{Object.entries(car).map(
												([key, value]) => (
													<div
														className="flex text-right w-full gap-5 justify-between"
														key={key}
													>
														<h4 className="text-grey capitalize">
															{key
																.split("_")
																.join(" ")}
														</h4>
														<p className="font-semibold text-black-100">
															{value}
														</p>
													</div>
												)
											)}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CarDetails;

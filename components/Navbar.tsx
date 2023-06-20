import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
	return (
		<header className="w-full  z-10 absolute">
			<nav className="bg-transparent flex mx-auto max-w-[1440px] py-4 px-6 justify-between items-center sm:px-16">
				<Link href="/" className="flex justify-center items-center">
					<Image
						src="/logo.svg"
						alt="logo"
						width={118}
						height={18}
						className="object-contain"
					/>
				</Link>

				<CustomButton
					title="Sign in"
					btnType="button"
					containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
				/>
			</nav>
		</header>
	);
};

export default Navbar;

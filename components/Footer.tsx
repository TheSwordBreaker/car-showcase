import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/utils/constants";

const Footer = () => (
	<footer className="border-t flex flex-col  border-gray-100 mt-5 text-black-100">
		<div className="flex flex-wrap max-md:flex-col py-10 px-6 gap-5 justify-between sm:px-16">
			<div className="flex flex-col gap-6 justify-start items-start">
				<Image
					src="/logo.svg"
					alt="logo"
					width={118}
					height={18}
					className="object-contain"
				/>
				<p className="text-base text-gray-700">
					Carhub 2023 <br />
					All Rights Reserved &copy;
				</p>
			</div>

			<div className="footer__links">
				{footerLinks.map((item) => (
					<div key={item.title} className="footer__link">
						<h3 className="font-bold">{item.title}</h3>
						<div className="flex flex-col gap-5">
							{item.links.map((link) => (
								<Link
									key={link.title}
									href={link.url}
									className="text-gray-500"
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
		</div>

		<div className="border-t flex flex-wrap border-gray-100 mt-10 py-10 px-6 justify-between items-center sm:px-16">
			<p>@2023 CarHub. All rights reserved</p>

			<div className="footer__copyrights-link">
				<Link href="/" className="text-gray-500">
					Privacy & Policy
				</Link>
				<Link href="/" className="text-gray-500">
					Terms & Condition
				</Link>
			</div>
		</div>
	</footer>
);

export default Footer;

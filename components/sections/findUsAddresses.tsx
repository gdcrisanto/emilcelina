import { useState } from 'react';
import Constants from '../../lib/constants';
import Vectors from '../vectors';
import Link from 'next/link';

const FindUsAddresses = () => {
	const [selectedGroup, setSelectedGroup] = useState(
		Constants.FIND_US_GROUPS_NAMES[0].addressGroup
	);
	const [openDropDown, setOpenDropDown] = useState(false);

	return (
		<>
			{/* ADDRESSES FILTER */}
			<div
				className="address-filter lg:hidden tracking-wide font-normal flex-row text-left mt-auto space-x-10 uppercase"
				onClick={() => setOpenDropDown(!openDropDown)}>
				<Link
					className="address-filter-select flex flex-row items-center"
					href="#address-filter">
					<span className="selected-group uppercase py-1 mr-2">
						{selectedGroup}
					</span>
					<Vectors.ChevronDown />
				</Link>
			</div>
			<div className="address-filter hidden lg:block tracking-wide font-normal flex-row text-left md:space-x-3 xl:space-x-8 uppercase">
				{Constants.FIND_US_GROUPS_NAMES.map((item) => {
					return (
						<span
							className={
								selectedGroup === item.addressGroup
									? 'selected-group pb-2 hover:cursor-default'
									: 'pb-2 hover:cursor-pointer'
							}
							onClick={() => {
								setSelectedGroup(item.addressGroup);
							}}
							key={item.addressGroup}>
							{item.addressGroup}
						</span>
					);
				})}
			</div>
			<span className="font-garamond text-6xl md:text-7xl font-semi tracking-tighter leading-tight mt-14">
				{selectedGroup}
			</span>
			{/* ADDRESS LIST */}
			<div className="address-container mt-12 mb-auto">
				<div className="address-col text-xl md:text-base mx-auto lg:mx-0 lg:max-w-none flex flex-col flex-grow gap-x-6">
					{Constants.FIND_US_GROUPS[selectedGroup].map((item) => {
						const location = item.location;
						return (
							<>
								{item.addresses.map((address) => {
									return (
										<div className="mb-6 text-wrap fade-up">
											{item.addresses[0].name ===
												address.name && (
												<>
													<p className="address-location mb-4 text-wrap uppercase">
														{location}
													</p>
												</>
											)}
											<p
												className="font-bold text-wrap"
												key={address.name}>
												{address.name}
											</p>
											<p
												className="font-light address text-wrap"
												key={address.address}>
												{address.address}
											</p>
											<p
												className="font-light address text-wrap"
												key={address.contact}>
												{address.contact}
											</p>
										</div>
									);
								})}
							</>
						);
					})}
				</div>
			</div>
			{/* ADDRESS FILTER DROPDOWN */}
			{openDropDown && (
				<div
					className="h-screen fixed w-full bottom-0 right-0 "
					onClick={() => {
						setOpenDropDown(false);
					}}>
					<div className="address-filter-dropdown flex flex-col items-center neutral-bg py-9 w-full justify-between ">
						{Constants.FIND_US_GROUPS_NAMES.map((item) => {
							return (
								<span
									className="uppercase tracking-wider py-5"
									onClick={() => {
										setSelectedGroup(item.addressGroup);
										setOpenDropDown(false);
									}}
									key={item.addressGroup}>
									{item.addressGroup}
								</span>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default { FindUsAddresses };

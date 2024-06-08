export default function SideMenu() {
	return (
		<>
			<ul className="menu bg-base-300 w-fit h-dvh p-4">
				<li>
					<a>Item 1</a>
				</li>
				<li>
					<a>Parent</a>
					<ul>
						<li>
							<a>Submenu 1</a>
						</li>
						<li>
							<a>Submenu 2</a>
						</li>
						<li>
							<a>Parent</a>
							<ul>
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<a>Item 3</a>
				</li>
			</ul>
		</>
	);
}

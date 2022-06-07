const Success = ({ emails = [] }) => {
	const handleBack = () => {
		// TODO เมื่อกดปุ่ม Back
	}

	return (
		<div className="bg-white w-96 p-6 md:mx-auto">
			<svg className="text-green-600 w-16 h-16 mx-auto my-6" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
				></path>
			</svg>
			<div className="text-center">
				<h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Hello!</h3>

				<p className="my-3 flex flex-wrap justify-center -m-1">
					{/* Loop email*/}
				</p>

				<p className="text-gray-600 my-2">Thank you for subscribe</p>
				<p> ^^  </p>
				<div className="py-10 text-center">
					<button onClick={handleBack} className="px-12 bg-green-600 hover:bg-indigo-500 text-white font-semibold py-3">
						GO BACK
					</button>
				</div>
			</div>
		</div>
	)
}

export default Success
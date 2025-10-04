import Link from "next/link";
import { CheckCircle, Upload, DollarSign, Truck, Star, Recycle } from "lucide-react";

const steps = [
	{
		icon: <Upload className="w-8 h-8" />,
		title: "Create Your Shop",
		description:
			"Sign up and set up your seller profile. Add your shop name, bio, and showcase your upcycling style.",
		details: "It's completely free to start selling on Upcycler Studios!",
	},
	{
		icon: <Recycle className="w-8 h-8" />,
		title: "Upcycle & Photograph",
		description:
			"Transform pre-loved clothing into unique pieces. Take high-quality photos that show off your creative work.",
		details: "Our sellers average 300% markup on their upcycled pieces!",
	},
	{
		icon: <DollarSign className="w-8 h-8" />,
		title: "List Your Items",
		description:
			"Upload your photos, write compelling descriptions, set your prices, and categorize your items.",
		details: "Use our built-in tools to reach the right audience for your style.",
	},
	{
		icon: <Star className="w-8 h-8" />,
		title: "Get Discovered",
		description:
			"Your items appear in our marketplace where eco-conscious shoppers are actively looking for unique pieces.",
		details: "We promote sustainable fashion to drive traffic to your shop.",
	},
	{
		icon: <Truck className="w-8 h-8" />,
		title: "Ship & Earn",
		description:
			"When you make a sale, ship directly to the customer and keep 85% of the sale price.",
		details: "We handle payments securely through Stripe - you get paid weekly.",
	},
];

const benefits = [
	"No listing fees or monthly charges",
	"Keep 85% of every sale",
	"Eco-conscious customer base",
	"Built-in marketing tools",
	"Secure payment processing",
	"Community of like-minded creators",
];

const Page = () => {
	return (
		<div className="relative min-h-screen">
			{/* Fixed background */}
			<div
				className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
				style={{ backgroundImage: 'url("/background.jpg")' }}
			/>

			{/* Scrollable content */}
			<div className="relative z-10 min-h-screen">
				{/* Hero section */}
				<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
						How It Works
					</h1>
					<p className="text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mb-8">
						Turn your passion for upcycling into profit. Join thousands of sellers
						creating sustainable fashion and earning money doing what they love.
					</p>
					<Link
						href="/signup"
						className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
					>
						Start Selling Today
					</Link>
				</div>

				{/* Steps section */}
				<div className="bg-white/95 backdrop-blur-sm py-16 px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
							From Thrift Find to Profit in 5 Steps
						</h2>
						<p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
							Our streamlined process makes it easy to turn your upcycling hobby into
							a thriving business
						</p>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{steps.map((step, index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500"
								>
									<div className="flex items-center mb-4">
										<div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
											{step.icon}
										</div>
										<div>
											<div className="text-sm font-semibold text-green-600 mb-1">
												STEP {index + 1}
											</div>
											<h3 className="text-xl font-bold text-gray-800">
												{step.title}
											</h3>
										</div>
									</div>
									<p className="text-gray-700 mb-3">{step.description}</p>
									<p className="text-sm text-green-600 font-medium">
										{step.details}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Benefits section */}
				<div className="bg-gray-800/90 backdrop-blur-sm py-16 px-4 text-white">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl font-bold mb-6">
							Why Sell on Upcycler Studios?
						</h2>
						<p className="text-xl mb-10 opacity-90">
							Join a community that values creativity, sustainability, and fair
							compensation
						</p>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{benefits.map((benefit, index) => (
								<div key={index} className="flex items-center text-left">
									<CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
									<span className="text-lg">{benefit}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Stats section */}
				<div className="bg-white/95 backdrop-blur-sm py-16 px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl font-bold mb-12 text-gray-800">
							Join a Thriving Community
						</h2>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="text-5xl font-bold text-green-600 mb-2">
									2,500+
								</div>
								<div className="text-xl text-gray-700">Active Sellers</div>
							</div>
							<div className="text-center">
								<div className="text-5xl font-bold text-green-600 mb-2">50K+</div>
								<div className="text-xl text-gray-700">Items Sold</div>
							</div>
							<div className="text-center">
								<div className="text-5xl font-bold text-green-600 mb-2">$2M+</div>
								<div className="text-xl text-gray-700">Earned by Sellers</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA section */}
				<div className="bg-gradient-to-r from-green-600 to-blue-600 py-16 px-4 text-white text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-4xl font-bold mb-6">
							Ready to Start Your Upcycling Business?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Join thousands of creators who are making money while making a
							difference. Your first listing is free!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/signup"
								className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
							>
								Start Selling Now
							</Link>
							<Link
								href="/all"
								className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-800 transition-colors"
							>
								Browse Marketplace
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
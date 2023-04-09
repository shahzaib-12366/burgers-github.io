import { burgers } from "./data.js";

const burgerWrapper = document.querySelector(".burger-card-wrapper");
const modalWrapper = document.querySelector(".burger-modal");

//////////////////////////////////////////////////////////////////!

//! burger card item show
function getBurgers() {
	burgers.forEach((burger) => renderBurger(burger));
}

getBurgers();

function currencyConvert(amount) {
	return amount.toLocaleString("bn-BD", {
		style: "currency",
		currency: "BDT",
	});
}

function renderBurger(burger) {
	const html = `<div
						class="burger-card rounded-lg shadow-md overflow-hidden  h-96 bg-white">
						<div
							class="burger-img  h-44 overflow-hidden flex justify-center items-center flex-col">
							<img
								src=${burger.img}
								alt=${burger.title}
								class="block w-full" />
						</div>
						<div class="burger-texts p-5 flex flex-col items-start gap-5">
							<h2 class="text-2xl font-semibold">${burger.title}</h2>
							<p class="text-xl font-semibold text-orange-500">${currencyConvert(
								burger.price,
							)}</p>
							<button 
								class="order-btn bg-orange-600 text-white py-2 px-4 rounded-md uppercase font-semibold mt-2 hover:bg-gray-700 duration-300">
								Order now
							</button>
						</div>
					</div>`;

	burgerWrapper.insertAdjacentHTML("afterbegin", html);
}

//! Modal show
const orderBtn = document.querySelectorAll(".order-btn");
orderBtn.forEach((order) => {
	order.addEventListener("click", function (e) {
		let button = e.currentTarget;
		let container = button.parentNode;
		const title = container.querySelector("h2").innerText;
		const price = container.querySelector("p").innerText;
		modalWrapper.classList?.remove("opacity-0", "hidden");
		modalWrapper.classList.add("opacity-1");

		const html = `<div
					class="modal-container bg-gray-200 h-44 w-72 rounded-md shadow-xl z-10 overflow-hidden flex flex-col p-8 items-center duration-500 ease-in fixed left-2/4 top-2/4 -translate-x-2/4">
					<span class="close absolute right-1 top-1 cursor-pointer">❌</span>
					<h3 class="title-modal text-2xl pb-4 font-semibold">${title}</h3>
					<p class="price-modal">${price}</p>
					<button 
						class="pay-btn bg-green-600 text-white mb-4 py-2 px-4 rounded-md uppercase font-semibold mt-2 hover:bg-gray-700 duration-300">
						Pay now
					</button>
				</div>`;
		modalWrapper.innerHTML = html;

		// order modal close
		const modalClose = document.querySelector(".close");
		modalClose.addEventListener("click", function () {
			modalWrapper.classList?.remove("opacity-1");
			modalWrapper.classList.add("opacity-0", "hidden");
		});
		//////////////////////////////////////////////////////!
		const payModal = document.querySelector(".pay-modal");
		document.querySelector(".pay-btn").addEventListener("click", function () {
			// order modal hide
			modalWrapper.classList?.remove("opacity-1");
			modalWrapper.classList.add("opacity-0", "hidden");

			// payment modal show
			payModal.classList?.remove("opacity-0", "hidden");
			payModal.classList.add("opacity-1");
		});

		const payClose = document.querySelector(".close-pay-modal");
		payClose.addEventListener("click", function () {
			payModal.classList?.remove("opacity-1");
			payModal.classList.add("opacity-0", "hidden");
		});
	});
});
//////////////////////////////////////////////////!

import React from "react";

export default function Team() {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Tasker Developer Team</h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 xl:grid-cols-1">

            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://lh3.googleusercontent.com/DrSk972SQ6KkifNyWa-fO5Vid269834vKAoodjSDQyLlGKeYzrjBP2zSUXftqDrYmWEBGGm8sun31HUcgvptiVkr7sKgUzN3N-J8yPFdbWo1_J1vel44Cf_USyK2B7uZf9pPILKwsGA1wZ04kWvSrNvdKjWtDh2eJPVTb1c4gRZS6PPkyCkY-AHKWXyBSq8GuOB09ElSyPUus9MzEKHEvH1UpyZPv7bQ6fz4f1npb14hNXDu1Qnrza-2eLx7rtr_BQJ1qp5R2EVa19bNL8iQtAziT74h81gMt253Nm0O-JYmYolTXI0efQYB9OqQBxF3NjTdB0-xh-XZpUiifIO7l1uiFH3Tnj-Zxn0NtcmLeMj4qojRjHX-7TP8Q1MYvotjnmdgcNGNz2sobd_tKybRF34RbjHTp34OO1Zf07ZKKT_hq5obqlHxCm2AQZZo0FRt0d_iAJxu1JFRjejtf9hbSqsHiRzJB4FUn-5faPHsIOBFMHwYfRuflvCyGkEL2ypWxd2vvaMgm-7qyimZrbhPumHOi7yRIMLgcb-E_7ka-UWRe3isqmgUegU37hvVuY55WUNXgFABcjABMAuwpQjhC6-nIqKUV-W4T1zKmNP3KMLb8-xLGTk-Ajl5t73dm6IhfVf9jasaCPccdig61qPb13jk5tcLAIgqS-e5ST5ajhEjalk6FPsuJdBt1MnNVQmzcgm8jmquKvgd7j2UUsWLrS4Jc9yOLC1OeAXQQUTkuD2CtQFBc0fxdwJIdrW-GI44fRWjn9BhcmE1Lpfqvw8ffSiIB0kO5Sxoj7VOgagqmMh1JR_WU9WgAmacb7f-s9M2MN0Sa6Y7J9WQsX722Yf6NLFeKqLZmFGxPo7JtC9IO94QppweWH-7D8NtUeB3mySNJ0KfGQQUO_usQaSGtkJlxXLg3Vdr69kr6fuC2aTq=w747-h995-no?authuser=0" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Kartik Rajput</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full stack developer</p>

                <div className="flex mt-3 -mx-2">
                    <a href="https://github.com/kartikvirendrar" target="blank" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
</> 
);
}
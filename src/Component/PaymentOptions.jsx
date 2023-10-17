import React from "react";

function PaymentOptions({ data, getSelectedPaymentMethod }) {
  const { status, list, manualPaymentobj } = data;
  console.log({ status, list, manualPaymentobj });
  return (
    <div className="bg-slate-400 mx-5 my-28 p-5 rounded-lg shadow-xl">
      <div className="flex justify-center text-white py-2 shadow-2xl bg-slate-500 rounded-md">
        Choose your payment method
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {status == "ok" &&
          list.map((res, index) => {
            return (
              <div key={index}>
                <div
                  onClick={() => getSelectedPaymentMethod(res)}
                  className="bg-white text-center rounded-md py-1"
                >
                  Gateway {index + 1}
                </div>
                {/* <div className="bg-white text-center rounded-md py-1 col-span-2">
                  Manual payment
                </div> */}
              </div>
            );
          })}
      </div>
      {manualPaymentobj && (
        <div
          onClick={() => getSelectedPaymentMethod(manualPaymentobj)}
          className="bg-white text-center rounded-md py-1 mt-10"
        >
          Manual payment
        </div>
      )}
    </div>
  );
}

export default React.memo(PaymentOptions);

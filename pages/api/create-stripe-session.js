
const stripe = require("stripe")(
  "sk_test_51K4UdHKR9pSIlDyIdhMFKvJDkGA5MzdvnF9VNdeq6k175rXOdSoy1X9UaHdcJyLwM5YLBACU63FtjEuEUS1v8lcL00XcMqLVx4"
);

async function CreateStripeSession(req, res) {
  const { items } = req.body;
  const redirectURL = "http://localhost:3222";
  items.map(async (item) => {
    let allProds = [];
    let fee = 0;
    item.products.map((products) => {
      let prods = {};
      fee += +products.price;
      prods["name"] = products.name;
      prods["amount"] = products.price;
      prods["currency"] = "NOK";
      prods["quantity"] = products.quantity;
      allProds.push(prods);
    });
    console.log(fee);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: allProds,
      payment_intent_data: {
        application_fee_amount: parseInt((fee / 100) * 15),
        transfer_data: {
          destination: item.connectedAccountId,
        },
      },
      mode: "payment",
      success_url: redirectURL,
      cancel_url: redirectURL,
    });
    const ress = {
      payment_method_types: ["card"],
      line_items: allProds,
      payment_intent_data: {
        application_fee_amount: parseInt((fee / 100) * 15),
        transfer_data: {
          destination: item.connectedAccountId,
        },
      },
      mode: "payment",
      success_url: redirectURL,
      cancel_url: redirectURL,
    };

    res.send({session,ress});
  });
  // const cityRef = firebase.firestore.collection('transactions')
  // const doc = await cityRef.get();
  // if (!doc.exists) {
  //   console.log('No such document!');
  // } else {
  //   console.log('Document data:', doc.data());
  // }
}

export default CreateStripeSession;

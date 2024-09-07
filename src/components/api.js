

export class Api {} fetch ("https://around.nomoreparties.co/v1/web_es_11/cards", {
  headers: {
    authorization: "973de3af-50d3-4d36-a3b6-c4529a18880b"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

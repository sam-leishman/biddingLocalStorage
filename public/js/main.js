let bids = getArray() || [];
printBids();

function addBid1(event) {
    if (event.key == 'Enter' || event.type == 'click') {
        if (document.getElementById('bidInput1').value != '') {
            bids.push(document.getElementById('bidInput1').value);
        }
        document.getElementById('bidInput1').value = '';
        printBids();
        saveArray();
    }
}

function addBid2(event) {
    if (event.key == 'Enter' || event.type == 'click') {
        if (document.getElementById('bidInput2').value != '') {
            bids.push(document.getElementById('bidInput2').value);
        }
        document.getElementById('bidInput2').value = '';
        printBids();
        saveArray();
    }
}

function printBids() {
    let bidHtml = '';
    for (let i = 0; i < bids.length; i++) {
        bidHtml += bids[i] + ', ';
    }
    document.getElementById('bids').innerHTML = bidHtml;
}

function saveArray() {
    let bidsString = JSON.stringify(bids);
    localStorage.setItem('saved-array', bidsString);
}

function getArray() {
    let data = localStorage.getItem('saved-array');
    return JSON.parse(data);
}
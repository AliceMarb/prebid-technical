import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class QueueToDataset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            currBid: "",
            bidTfXValues: [],
            bidTfYValues: [],
            queue:
                // Mocked data for queue
                // (JavaScript does not have built-in queue type)
                // Each bid dict is a winning bid response (same format as returned by getBidResponses()),
                // with additional keys of mediaType (banner/video/native), win (true/false) to show if 
                // Prebid won over the ad server, and the bidfloor used.

                // Source data: http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.getBidResponses
                [
                    {
                        "bidderCode": "appnexus",
                        "width": 300,
                        "height": 250,
                        "statusMessage": "Bid available",
                        "adId": "7a53a9d3",
                        "creative_id": 29681110,
                        "cpm": 0.5,
                        "adUrl": "https://nym1.ib.adnxs.com/ab?e=wqT_3QLzBKBqAgAAAgDWAAUIkav6sAUQucfc0v-nzQcYj…r=http%3A%2F%2Flocal%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html",
                        "requestTimestamp": 1444844944095,
                        "responseTimestamp": 1444844944180,
                        "timeToRespond": 85,
                        "adUnitCode": "/19968336/header-bid-tag-0",
                        "bidder": "appnexus",
                        "usesGenericKeys": true,
                        "size": "300x250",
                        "adserverTargeting": {
                            "hb_bidder": "appnexus",
                            "hb_adid": "7a53a9d3",
                            "hb_pb": "0.50"
                        },
                        "mediaType": "banner",
                        "bidfloor": 0.80,
                        "win": true,
                    },
                    {
                        "bidderCode": "appnexus",
                        "width": 300,
                        "height": 250,
                        "statusMessage": "Bid available",
                        "adId": "7a53a9d3",
                        "creative_id": 29681110,
                        "cpm": 0.5,
                        "adUrl": "https://nym1.ib.adnxs.com/ab?e=wqT_3QLzBKBqAgAAAgDWAAUIkav6sAUQucfc0v-nzQcYj…r=http%3A%2F%2Flocal%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html",
                        "requestTimestamp": 1444844944095,
                        "responseTimestamp": 1444844944180,
                        "timeToRespond": 85,
                        "adUnitCode": "/19968336/header-bid-tag-0",
                        "bidder": "appnexus",
                        "usesGenericKeys": true,
                        "size": "300x250",
                        "adserverTargeting": {
                            "hb_bidder": "appnexus",
                            "hb_adid": "7a53a9d3",
                            "hb_pb": "0.50"
                        },
                        "mediaType": "banner",
                        "bidfloor": 0.80,
                        "win": true,
                    },
                    {
                        "bidderCode": "appnexus",
                        "width": 300,
                        "height": 250,
                        "statusMessage": "Bid available",
                        "adId": "7a53a9d3",
                        "creative_id": 29681110,
                        "cpm": 0.5,
                        "adUrl": "https://nym1.ib.adnxs.com/ab?e=wqT_3QLzBKBqAgAAAgDWAAUIkav6sAUQucfc0v-nzQcYj…r=http%3A%2F%2Flocal%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html",
                        "requestTimestamp": 1444844944095,
                        "responseTimestamp": 1444844944180,
                        "timeToRespond": 85,
                        "adUnitCode": "/19968336/header-bid-tag-0",
                        "bidder": "appnexus",
                        "usesGenericKeys": true,
                        "size": "300x250",
                        "adserverTargeting": {
                            "hb_bidder": "appnexus",
                            "hb_adid": "7a53a9d3",
                            "hb_pb": "0.50"
                        },
                        "mediaType": "banner",
                        "bidfloor": 0.80,
                        "win": true,
                    },
                    {
                        "bidderCode": "appnexus",
                        "width": 300,
                        "height": 250,
                        "statusMessage": "Bid available",
                        "adId": "7a53a9d3",
                        "creative_id": 29681110,
                        "cpm": 0.5,
                        "adUrl": "https://nym1.ib.adnxs.com/ab?e=wqT_3QLzBKBqAgAAAgDWAAUIkav6sAUQucfc0v-nzQcYj…r=http%3A%2F%2Flocal%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html",
                        "requestTimestamp": 1444844944095,
                        "responseTimestamp": 1444844944180,
                        "timeToRespond": 85,
                        "adUnitCode": "/19968336/header-bid-tag-0",
                        "bidder": "appnexus",
                        "usesGenericKeys": true,
                        "size": "300x250",
                        "adserverTargeting": {
                            "hb_bidder": "appnexus",
                            "hb_adid": "7a53a9d3",
                            "hb_pb": "0.50"
                        },
                        "mediaType": "banner",
                        "bidfloor": 0.80,
                        "win": true,
                    },
                    {
                        "bidderCode": "appnexus",
                        "width": 300,
                        "height": 250,
                        "statusMessage": "Bid available",
                        "adId": "7a53a9d3",
                        "creative_id": 29681110,
                        "cpm": 0.5,
                        "adUrl": "https://nym1.ib.adnxs.com/ab?e=wqT_3QLzBKBqAgAAAgDWAAUIkav6sAUQucfc0v-nzQcYj…r=http%3A%2F%2Flocal%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html",
                        "requestTimestamp": 1444844944095,
                        "responseTimestamp": 1444844944180,
                        "timeToRespond": 85,
                        "adUnitCode": "/19968336/header-bid-tag-0",
                        "bidder": "appnexus",
                        "usesGenericKeys": true,
                        "size": "300x250",
                        "adserverTargeting": {
                            "hb_bidder": "appnexus",
                            "hb_adid": "7a53a9d3",
                            "hb_pb": "0.50"
                        },
                        "mediaType": "banner",
                        "bidfloor": 0.80,
                        "win": true,
                    },
                    {
                        "bidderCode": "pubmatic",
                        "width": 300,
                        "height": 250,
                        "statusMessage": "Bid available",
                        "adId": "1139e34e14",
                        "adSlot": "39620189@300x250",
                        "cpm": 1,
                        "ad": "<span class=\"PubAPIAd\"><script src='https://ad.turn.com/server/ads.js?pub=5757398&cch=36757096&code=37127675&l=3…tcGlkPUVERkNGMDY5LTA2ODctNDAxQy04NkMwLTIzQjNFNzI1MzdGNiZwYXNzYmFjaz0w_url='></script></span> <!-- PubMatic Ad Ends -->",
                        "adUrl": "https://aktrack.pubmatic.com/AdServer/AdDisplayTrackerServlet?operId=1&pubId…local%3A4000%2Fexamples%2Fpbjs_partial_refresh_example.html&lpu=hotels.com",
                        "dealId": "",
                        "requestTimestamp": 1444844944105,
                        "responseTimestamp": 1444844944354,
                        "timeToRespond": 249,
                        "adUnitCode": "/19968336/header-bid-tag-0",
                        "bidder": "pubmatic",
                        "usesGenericKeys": true,
                        "size": "300x250",
                        "adserverTargeting": {
                            "hb_bidder": "pubmatic",
                            "hb_adid": "1139e34e14",
                            "hb_pb": "1.00"
                        },
                        "mediaType": "video",
                        "bidfloor": 0.10,
                        "win": true,
                    },
                    {
                        "bidderCode": "rubicon",
                        "width": 300,
                        "height": 250,
                        "statusMessage": "Bid available",
                        "adId": "130d3b0d9b",
                        "cpm": 0.795995,
                        "ad": "<scri...pt>",
                        "ad_id": "3161645",
                        "sizeId": "15",
                        "requestTimestamp": 1444844944116,
                        "responseTimestamp": 1444844944396,
                        "timeToRespond": 280,
                        "adUnitCode": "/19968336/header-bid-tag-0",
                        "bidder": "rubicon",
                        "usesGenericKeys": true,
                        "size": "300x250",
                        "adserverTargeting": {
                            "hb_bidder": "rubicon",
                            "hb_adid": "130d3b0d9b",
                            "hb_pb": "0.50"
                        },
                        "mediaType": "native",
                        "bidfloor": 1.00,
                        "win": false,
                    }

                ],
        };
    }

    updateCounter = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            },
            // using callback function to call the next 
            // iteration after the state is set
            () => {
                this.processBidData();
            }
        );

    }

    /*
    * @param queue, a queue of bid data
    * @return none
    * Populates bidTfYValues, a 1-D array of prices, and bidTfXValues,
    * a 2D array of all other bid parameters, to be used by
    * TensorFlow.js 
    * Referenced: https://js.tensorflow.org/api/latest/#tensor
    */
    processBidData = () => {

        if (this.state.queue.length == 0) {
            return;
        }

        var queueUpdated = this.state.queue.slice();
        var bidData = queueUpdated.shift();
        console.log("Processing row " + this.state.counter);
        // mediaType, win/lose, width, height, cpm
        var bidRow = [];
        // check first three because these need to be 
        // manually added
        var add = true;
        if (!("bidfloor" in bidData)) {
            alert("bid doesn't have bidfloor key");
            add = false;
        }
        if (!("mediaType" in bidData)) {
            alert("bid doesn't have mediaType key");
            add = false;
        } else {
            switch (bidData["mediaType"]) {
                case "banner":
                    bidRow[0] = 0;
                    break;
                case "video":
                    bidRow[0] = 1;
                    break;
                default:
                    bidRow[0] = 2;
            }
        }
        if (!"win" in bidData) {
            alert("bid doesn't have win key");
            add = false;
        } else {
            if (bidData["win"]) {
                bidRow[1] = 1;
            } else {
                bidRow[1] = 0;
            }
        }
        if (add) {
            bidRow[2] = bidData["width"];
            bidRow[3] = bidData["height"];
            bidRow[4] = bidData["cpm"];
            var newXvals = this.state.bidTfXValues.slice();
            var newYvals = this.state.bidTfYValues.slice();
            newXvals[newXvals.length] = bidRow;
            newYvals[newYvals.length] = bidData["bidfloor"];
            this.setState({
                bidTfXValues: newXvals,
                bidTfYValues: newYvals,
                queue: queueUpdated,

            });
        }
        this.updateCounter();
    }

    isFinished = () => {
        if (this.state.queue.length == 0) {
            console.log("X values array: mediaType, win/lose, width, height, cpm")
            console.log(this.state.bidTfXValues)
            console.log("Y values array: bidfloor price")
            console.log(this.state.bidTfYValues)
            return (
                <h2>Finished processing! (Check console for structured data)</h2>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>Technical Test: Alice Marbach</h1>
                <button onClick={() => this.processBidData()}>Start processing data!</button>
                <h2>
                    {"Processed: " + this.state.counter}
                </h2>
                {this.isFinished()}
            </div>

        );
    }
}


// ========================================

ReactDOM.render(
    <QueueToDataset />,
    document.getElementById('root')
);

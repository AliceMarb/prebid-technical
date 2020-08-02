import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';


class QueueToDataset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            currBid: "",
            queue:      
            // Mocked data for queue
            // (JavaScript does not have built-in queue type)
            // Each bid dict is a winning bid response (same format as returned by getBidResponses()),
            // with additional keys of mediaType (banner/video/native), win (true/false) to show if 
            // Prebid won over the ad server, and the bidfloor used.
    
            // Source data: http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.getBidResponses
            [
                // AppNexus build params uses 'reserve' key to 
                // show bidfloor
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
                    "width": "300",
                    "height": "250",
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
                    "width": "300",
                    "height": "250",
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

    /*
    * @param queue, a queue of bid data
    * @return 2D-lists of data to be used with TensorFlow.js
    *   one for each mediaType (video, banner, native)
    * Referenced: https://js.tensorflow.org/api/latest/#tensor
    */ 
    convertToTfData() {
        // control for mediaType to get a better model
        var bidTfXValues = [];
        var bidTfYValues = [];
        for (let bidData of this.state.queue) {
            console.log(bidData);
            // mediaType, win/lose, width, height, cpm
            var bidRow = [];
            // check first three because these need to be 
            // manually added
            if (!("bidfloor" in bidData)) {
                alert("bid doesn't have bidfloor key");
                continue;
            }
            if (!("mediaType" in bidData)) {
                alert("bid doesn't have mediaType key");
                continue;
            } else {
                switch(bidData["mediaType"]) {
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
                continue;
            } else {
                if (bidData["win"]) {
                    bidRow[1] = 1;
                } else {
                    bidRow[1] = 0;
                }
            }
            bidRow[2] = bidData["width"];    
            bidRow[3] = bidData["height"];    
            bidRow[4] = bidData["cpm"];   
            bidTfXValues[bidTfXValues.length] = bidRow
            bidTfYValues[bidTfYValues.length] = bidData["bidfloor"]; 
            
            this.setState(
                {counter: this.state.counter + 1,
                currBid: bidData["mediaType"],
                }, 
                () => console.log(this.state.counter + this.state.currBid)
            );
            console.log("reached set state");
        }
        return (bidTfXValues, bidTfYValues); 
    }
  
    render() {
        return (
            <div>
                <button onClick={() => this.convertToTfData()}></button>
                <h1>
                    {this.state.counter}
                    {this.state.currBid}
                </h1>
            </div>
            
        );
    }
}
  

// ========================================

ReactDOM.render(
<QueueToDataset />,
document.getElementById('root')
);
  
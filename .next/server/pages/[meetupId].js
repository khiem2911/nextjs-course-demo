(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 3780:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MeetupDetail_container__yNw92"
};


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(3780);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


const MeetupDetail = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MeetupDetail_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.meetUpData.image,
                alt: props.meetUpData.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.meetUpData.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.meetUpData.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.meetUpData.description
            })
        ]
    });
};
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js




const DetailMeetUp = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.meetUpData.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.meetUpData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                meetUpData: props.meetUpData
            }),
            ";"
        ]
    });
};
/* harmony default export */ const _meetupId_ = (DetailMeetUp);
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://khiem:phamduykhiem@cluster0.pbnv8dq.mongodb.net/");
    const db = client.db();
    const meetupCollections = db.collection("meetups");
    const meetups = await meetupCollections.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map((item)=>({
                params: {
                    meetupId: item._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://khiem:phamduykhiem@cluster0.pbnv8dq.mongodb.net/");
    const db = client.db();
    const meetupCollections = db.collection("meetups");
    const selectedMeetUp = await meetupCollections.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    return {
        props: {
            meetUpData: {
                id: selectedMeetUp._id.toString(),
                title: selectedMeetUp.title,
                address: selectedMeetUp.address,
                description: selectedMeetUp.description,
                image: selectedMeetUp.image
            }
        }
    };
}


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8721));
module.exports = __webpack_exports__;

})();
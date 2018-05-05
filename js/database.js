var teacher =[
    {subject: "DP_Psychology-SL", name: "许丹阳1", slogan: "我行！你也行"},
    {subject: "DP_Psychology-SL", name: "许丹阳2", slogan: "我行！你也行"},
    {subject: "DP_Psychology-SL", name: "许丹阳3", slogan: "我行！你也行"},
    {subject: "DP_Psychology-SL", name: "许丹阳4", slogan: "我行！你也行"},
    {subject: "DP_Psychology-SL", name: "许丹阳5", slogan: "我行！你也行"},
    {subject: "DP_Spanish-SL", name: "许丹阳S1", slogan: "我行！你也行"},
    {subject: "DP_Spanish-SL", name: "许丹阳S2", slogan: "我行！你也行"},
    {subject: "DP_Spanish-SL", name: "许丹阳S3", slogan: "我行！你也行"},
    {subject: "DP_Chinese A-HL", name: "许丹阳C1", slogan: "我行！你也行"},
    {subject: "MYP_Biology", name: "许丹阳MYP Bio", slogan: "我行！你也行"},
];



var options = {
    caseSensitive: true,
    matchAllTokens: true,
    threshold: 0.0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "subject"
  ]
  };
  var fuse = new Fuse(teacher, options); // "list" is the item array
//   var result = fuse.search("DP");
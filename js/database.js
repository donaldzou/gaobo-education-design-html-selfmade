var teacher = [
    {
        subject: "DP_Psychology-SL",
        name: "Maxy Ho老师",
        slogan: "我行！你不行",
        course: [
            {
                title: "生产可能性曲线六大考点总结",time:"41:09",
                time:"41:09",
            },
            {
                title: "生产可能性曲线六大考点总结",
                time:"41:0933"
            }
        ]
    },
    { subject: "DP_Psychology-SL", name: "Mia老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09",time:"41:09" }] },
    { subject: "DP_Psychology-SL", name: "许丹阳老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09",time:"41:09" }] },
    { subject: "DP_Psychology-SL", name: "许许阳老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09" }] },
    { subject: "DP_Psychology-SL", name: "许丹丹老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09" }] },
    { subject: "DP_Spanish-SL", name: "许阳阳老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09" }] },
    { subject: "DP_Spanish-SL", name: "许许许老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09" }] },
    { subject: "DP_Spanish-SL", name: "许丹阳老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09" }] },
    { subject: "DP_Chinese A-HL", name: "许丹阳老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09" }] },
    { subject: "MYP_Biology", name: "Danny Xu老师", slogan: "我行！你不行", course: [{ title: "生产可能性曲线六大考点总结",time:"41:09" }, { title: "生产可能性曲线六大考点总结",time:"41:09" }] },
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
        "subject", "name"
    ]
};
var fuse = new Fuse(teacher, options); // "list" is the item array
//   var result = fuse.search("DP");
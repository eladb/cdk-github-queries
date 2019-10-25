function encodeUriComponents(comps) {
    return Object.entries(comps).map(e => encodeURIComponent(e[0]) + '=' + encodeURIComponent(e[1])).join('&');
}


function gitHubQuery(base, clauses) {
    return base + '?' + encodeUriComponents({
        utf8: '✓',
        q: clauses.join(' '),
    });
}

const pr = ["is:open", "is:pr", "archived:false"];
const issue = ["is:open", "is:issue", "archived:false"];
const ourRepos = ["repo:aws/jsii", "repo:aws/aws-cdk"];


// LINKS
const LINKS = [
    { title: "Review", href: "https://github.com/pulls/review-requested" },
    { title: "Triage", href: gitHubQuery("https://github.com/issues", [...issue, ...ourRepos, "assignee:USERNAME", "label:bug", "-label:p0", "-label:p1", "-label:p2", "-label:p3"])},
    { title: "P0", href: gitHubQuery("https://github.com/issues", [...issue, ...ourRepos, "assignee:USERNAME", "label:bug", 'label:p0', '-label:fix-ready'])},
    { title: "Shepherd", href: gitHubQuery("https://github.com/pulls", [...pr, "assignee:USERNAME", "-author:USERNAME" ])},
    { title: "Author", href: "https://github.com/pulls" },
    { title: "Other Bugs", href: gitHubQuery("https://github.com/issues", [...issue, ...ourRepos, "assignee:USERNAME", "label:bug", '-label:p0', '-label:fix-ready'])},
    { title: "Non-bugs", href: gitHubQuery("https://github.com/issues/assigned", [ '-label:bug' ]) },
];

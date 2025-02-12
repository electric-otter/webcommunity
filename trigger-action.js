window.onload = function() {
    triggerDockerAction(); // Automatically trigger the action on page load
};

async function triggerDockerAction() {
    const owner = 'electric-otter';  // Replace with your GitHub username
    const repo = 'webcommunity';  // Replace with your repository name
    const workflow = 'docker.yml';        // Replace with the name of your workflow file
    const branch = 'main';  // Specify the branch you want to trigger

    const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow}/dispatches`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ref: branch  // Specify the branch to trigger the action
        })
    });

    if (response.ok) {
        alert('Our server has started on your local machine!');
    } else {
        alert('Our servers are down, try on another device or wait a little while.');
    }
}

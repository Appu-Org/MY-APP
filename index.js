module.exports = (app) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue! have patience",
    });

    return context.octokit.issues.createComment(issueComment);
  });
  
   app.on("issues.opened", async (context) => {
	a = octokit.rest.repos.addCollaborator({
		owner:event.payload.repository.owner.login,
		repo:event.payload.repository.name,
		username:"appuraj-philips",
	});
    return context.a;
  });
console.log("--Thanks---");

  app.onAny(async (context) => {
    context.log.info({ event: context.name, action: context.payload.action });
  });

  app.onError(async (error) => {
    context.log.error(error);
  });
};
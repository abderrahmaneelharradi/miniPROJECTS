import React from 'react';

const Projects = () => {
  return (
    <div class="container">
	<div class="row justify-content-center">
		<div class="col-12 col-md-8 col-lg-6 pb-5">
            <form action="mail.php" method="post">
                <div class="card border-secondary rounded-0">
                    <div class="card-header p-0">
                        <div class="bg-info text-white text-center py-2">
                            <h3><i class="fa fa-envelope"></i> Contact us</h3>
                        </div>
                    </div>
                    <div class="card-body p-3">
                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                </div>
                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Phone number" required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                </div>
                                <input type="email" class="form-control" id="nombre" name="email" placeholder="example@gmail.com" required/>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                </div>
                                <textarea class="form-control" placeholder="Send message" required></textarea>
                            </div>
                        </div>

                        <div class="text-center">
                            <input type="submit" value="Submit" class="btn btn-info btn-block rounded-0 py-2 "/>
                        </div>
                    </div>

                </div>
            </form>
        </div>
	</div>
</div>
  );
};

export default Projects;
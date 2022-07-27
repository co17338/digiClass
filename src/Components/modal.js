import * as React from "react";



export default function BasicModal() {


  return (
    <div>
      <div
        class="modal fade"
        id="modalContactForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 font-weight-bold">Add Course Description</h4>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body mx-3">
              <div class="md-form mb-5">
                <i class="fas fa-user prefix grey-text"></i>
                Course Name
                <input type="text" id="form34" class="form-control validate" />
                <label data-error="wrong" data-success="right" for="form34">
                  
                </label>
              </div>

              <div class="md-form mb-5">
                <i class="fas fa-envelope prefix grey-text"></i>
                Timings
                <input type="email" id="form29" class="form-control validate" />
                <label data-error="wrong" data-success="right" for="form29">
                  
                </label>
              </div>

              <div class="md-form mb-5">
                <i class="fas fa-tag prefix grey-text"></i>
                New Course Id
                <input type="text" id="form32" class="form-control validate" />
                <label data-error="wrong" data-success="right" for="form32">
                 
                </label>
              </div>

              <div class="md-form">
                <i class="fas fa-pencil prefix grey-text"></i>
                Course Description
                <textarea
                  type="text"
                  id="form8"
                  class="md-textarea form-control"
                  rows="4"
                ></textarea>
                <label data-error="wrong" data-success="right" for="form8">
                  
                </label>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-unique">
                Add Class <i class="fas fa-paper-plane-o ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a
          href=""
          class="btn btn-default btn-rounded mb-4"
          data-bs-toggle="modal"
          data-bs-target="#modalContactForm"
         
        >
          Add Course
        </a>
      </div>
    </div>
  );
}

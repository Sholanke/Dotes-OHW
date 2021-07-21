import React from "react";
import "./index.scss";

export default function Notes() {
  return (
    <div className="app-notes">
      <div className="app-notes__headers">
        <div className="app-notes__header">
          <div className="app-notes__header__title-row">
            <p className="app-notes__header__title-row__title">Notes</p>
            <button className="app-notes__header__title-row__btn btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 2C8.55228 2 9 2.44772 9 3V7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H9V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H7V3C7 2.44772 7.44772 2 8 2Z"
                  fill="currentColor"
                />
              </svg>
              Create a Public Note
            </button>
          </div>

          <div className="app-notes__header__links">
            <a href="/" className="app-notes__header__links__link">
              Private
            </a>
            <a href="/" className="app-notes__header__links__link active">
              Public
            </a>
          </div>
        </div>
        <div className="app-notes__header--search">
          <div className="app-notes__header__search-bar-container">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              className="app-notes__header__search-bar"
              placeholder="Search notes"
            />
          </div>

          <div className="sort-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.71 6.29C12.6149 6.19896 12.5028 6.12759 12.38 6.08C12.1365 5.97998 11.8635 5.97998 11.62 6.08C11.4972 6.12759 11.3851 6.19896 11.29 6.29L7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71C7.38324 11.8032 7.49393 11.8772 7.61575 11.9277C7.73757 11.9781 7.86814 12.0041 8 12.0041C8.13186 12.0041 8.26243 11.9781 8.38425 11.9277C8.50607 11.8772 8.61676 11.8032 8.71 11.71L11 9.41V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V9.41L15.29 11.71C15.383 11.8037 15.4936 11.8781 15.6154 11.9289C15.7373 11.9797 15.868 12.0058 16 12.0058C16.132 12.0058 16.2627 11.9797 16.3846 11.9289C16.5064 11.8781 16.617 11.8037 16.71 11.71C16.8037 11.617 16.8781 11.5064 16.9289 11.3846C16.9797 11.2627 17.0058 11.132 17.0058 11C17.0058 10.868 16.9797 10.7373 16.9289 10.6154C16.8781 10.4936 16.8037 10.383 16.71 10.29L12.71 6.29ZM19 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3C4 3.26522 4.10536 3.51957 4.29289 3.70711C4.48043 3.89464 4.73478 4 5 4H19C19.2652 4 19.5196 3.89464 19.7071 3.70711C19.8946 3.51957 20 3.26522 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <span className="sort-btn__title">Sort:</span>
            <select name="" id="">
              <option value="" defaultValue>
                Chronological
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="app-notes__notes-grid-container">
        <p className="app-notes__notes-grid-heading">Pinned public notes</p>
        <div className="app-notes__notes-grid">
          <Note />
          <Note />
          <Note />
        </div>
      </div>

      <div className="app-notes__notes-grid-container">
        <p className="app-notes__notes-grid-heading">All public notes</p>
        <div className="app-notes__notes-grid">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  );
}

function Note() {
  return (
    <div className="app-note">
      <div className="app-note__header">
        <div className="info">
          <span className="picture" style={{ backgroundImage: `url("http://tinygraphs.com/squares/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg")` }}></span>
          <div className="text">
            <div className="name">Chris Kruger</div>
            <p className="time">
              1st of April, 2020 <span className="dot"></span>
              4:33 pm
            </p>
          </div>
        </div>
      </div>

      <p className="app-note__title">Focus Time 😎</p>
      <p className="app-note__description">
        Hi guys, I would like to suggest that we set a fixed focus time within
        the company, where you can work in a focused environment.
      </p>
    </div>
  );
}

import React from "react";
import logo from "./logo.svg";
import "./App.css";

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "Ari", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2,
      name: "Ari",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "Nate", text: "I am so jealous" }]
  }
];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header title="My Timeline" />
        <Content activities={activities} />
      </React.Fragment>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="fa fa-more" />
        <span className="title">{this.props.title}</span>
        <input type="text" className="searchInput" placeholder="Search ..." />
        <div className="fa fa-search searchIcon" />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    const { activities } = this.props;
    return (
      <div className="content">
        <div className="line" />
        {/* Timeline item */}
        {activities.map(activity => (
          <ActivityItem activity={activity} />
        ))}
      </div>
    );
  }
}

class ActivityItem extends React.Component {
  render() {
    const {activity} = this.props;
    return (
      <div className="item">
        <div className="avatar">
          <img alt={activity.text} src={activity.user.avatar} />
          {activity.user.name}
        </div>
        <span className="time">{activity.timestamp}</span>
        <p>{activity.text}</p>
        <div className="commentCount">{activity.comments.length}</div>
      </div>
    );
  }
}

export default App;

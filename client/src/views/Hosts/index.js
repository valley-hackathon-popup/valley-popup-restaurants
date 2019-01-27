import './hosts.scss';
import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import { initializeHostById } from './queries';
import { NameForm, CategoryForm, DescriptionForm, TimesForm } from './forms';

export default class Hosts extends React.Component {
  state = {
    id: this.props.match.params.id,
  };

  render() {
    const { id } = this.state;

    return (
      <Query query={initializeHostById} variables={{ id }}>
        {({ loading, error, data: { Location: restaurant } }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <Redirect push to="/" />;

          const {
            category,
            description,
            name,
            openTimespans: [times],
            photos: [{ url: image }],
          } = restaurant;

          console.log(times);

          return (
            <main className="hosts">
              <img className="hosts-image" src={image} alt="" />
              <div className="hosts-forms">
                <h1>Admin Dashboard</h1>
                <NameForm value={name} id={id} />
                <CategoryForm value={category} id={id} />
                <DescriptionForm value={description} id={id} />
                <TimesForm value={times} id={id} />
              </div>
            </main>
          );
        }}
      </Query>
    );
  }
}

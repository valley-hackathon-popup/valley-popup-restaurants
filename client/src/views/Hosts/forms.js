import React from 'react';
import { Mutation, Query } from 'react-apollo';
import moment from 'moment';

import TimePicker from 'antd/lib/time-picker';
import { UPDATE_NORMAL_FIELDS, getAllCategories } from './queries';

export class NameForm extends React.Component {
  componentDidMount() {
    this.input.value = this.props.value;
  }

  state = {
    isFocused: false,
  };

  handleBlur = query => {
    this.setState({ isFocused: false }, () => {
      if (this.input.value !== this.props.value) this.handleSubmit(query);
    });
  };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleSubmit = query => {
    query({ variables: { id: this.props.id, name: this.input.value } });
  };

  render() {
    const { isFocused } = this.state;
    return (
      <Mutation mutation={UPDATE_NORMAL_FIELDS}>
        {updateNormalFields => (
          <form
            className="hosts-form"
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(updateNormalFields);
            }}
          >
            <label className="hosts-form-label">Restaurant Name</label>
            <div className="hosts-form-input-container">
              <input
                onFocus={this.handleFocus}
                onBlur={() => this.handleBlur(updateNormalFields)}
                ref={input => (this.input = input)}
                className={
                  isFocused
                    ? 'hosts-form-input-visible'
                    : 'hosts-form-input-hidden'
                }
              />
            </div>
          </form>
        )}
      </Mutation>
    );
  }
}

export class CategoryForm extends React.Component {
  handleSubmit = (e, query) => {
    query({ variables: { id: this.props.id, categoryId: e.target.value } });
  };

  render() {
    const { id: selectedId } = this.props.value;

    return (
      <Query query={getAllCategories}>
        {({ loading, error, data: { allCategories: categories } }) => {
          if (loading) return <div />;

          return (
            <Mutation mutation={UPDATE_NORMAL_FIELDS}>
              {updateNormalFields => (
                <form className="hosts-form">
                  <label className="hosts-form-label">Cuisine Type</label>
                  <div className="hosts-form-input-container">
                    <select
                      onChange={e => this.handleSubmit(e, updateNormalFields)}
                      defaultValue={selectedId}
                    >
                      {categories.map(category => {
                        return (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export class DescriptionForm extends React.Component {
  componentDidMount() {
    this.input.value = this.props.value;
  }

  state = {
    isFocused: false,
  };

  handleBlur = query => {
    this.setState({ isFocused: false }, () => {
      if (this.input.value !== this.props.value) this.handleSubmit(query);
    });
  };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleSubmit = query => {
    query({ variables: { id: this.props.id, description: this.input.value } });
  };

  render() {
    const { isFocused } = this.state;
    return (
      <Mutation mutation={UPDATE_NORMAL_FIELDS}>
        {updateNormalFields => (
          <form
            className="hosts-form"
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(updateNormalFields);
            }}
          >
            <label className="hosts-form-label">Restaurant Description</label>
            <div className="hosts-form-input-container">
              <textarea
                onFocus={this.handleFocus}
                onBlur={() => this.handleBlur(updateNormalFields)}
                ref={input => (this.input = input)}
                className={
                  isFocused
                    ? 'hosts-form-textarea-visible'
                    : 'hosts-form-textarea-hidden'
                }
              />
            </div>
          </form>
        )}
      </Mutation>
    );
  }
}

export class TimesForm extends React.Component {
  handleChange = (time, name) => {
    time = time.utc().format();

    switch (name) {
      case 'openTime':
        console.log('open');
        return;
      case 'closeTime':
        console.log('close');
        return;
      default:
        return;
    }
  };
  render() {
    const { openTime, closeTime } = this.props.value;
    return (
      <div className="hosts-time-pickers">
        <div>
          <label>Opening Time </label>
          <TimePicker
            name="openTime"
            onChange={this.handleChange}
            defaultValue={moment(openTime)}
            className="hosts-time-picker"
            format="HH:mm a"
            use12Hours={true}
            minuteStep={15}
            hideDisabledOptions={true}
          />
        </div>
        <div>
          <label>Closing Time </label>
          <TimePicker
            name="closeTime"
            defaultValue={moment(closeTime)}
            className="hosts-time-picker"
            format="HH:mm a"
            use12Hours={true}
            minuteStep={15}
            hideDisabledOptions={true}
          />
        </div>
      </div>
    );
  }
}

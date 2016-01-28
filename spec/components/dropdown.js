import React from 'react';
import Button from '../../components/button';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownList, DropdownListItem } from '../../components/dropdown';
import style from '../style';

const countries = [
  { value: 'EN-gb', label: 'England', img: 'http://' },
  { value: 'ES-es', label: 'Spain', img: 'http://' },
  { value: 'TH-th', label: 'Thailand', img: 'http://' },
  { value: 'EN-en', label: 'USA', img: 'http://' },
  { value: 'FR-fr', label: 'France', img: 'http://' }
];

class DropdownTest extends React.Component {
  state = {
    dropdown1: 'ES-es',
    dropdown4: 'TH-th'
  };

  handleChange = (dropdown, value) => {
    const newState = {};
    newState[dropdown] = value;
    this.setState(newState);
  };

  customDropdownItem (data) {
    return (
      <div className={style.dropdownTemplate}>
        <img className={style.dropdownTemplateImage} src={data.img} />
        <div className={style.dropdownTemplateContent}>
          <strong>{data.label}</strong>
          <small>{data.value}</small>
        </div>
      </div>
    );
  }

  render () {
    return (
      <section>
        <h5>Dropdown</h5>
        <p>lorem ipsum...</p>

        <Dropdown
          onChange={this.handleChange.bind(this, 'dropdown1')}
          source={countries}
          template={this.customDropdownItem}
          value={this.state.dropdown1}
        >
          <DropdownTrigger>
            <Button>Dropdown</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownList >
              {countries.map((country, idx) => (
                <DropdownListItem key={idx}>{country.label}</DropdownListItem>
              ))}
            </DropdownList>
          </DropdownContent>
        </Dropdown>
      </section>
    );
  }
}

export default DropdownTest;

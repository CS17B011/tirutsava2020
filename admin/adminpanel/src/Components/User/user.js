import React, {Component, forwardRef} from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export default class User extends Component{
  state = {
    data : [
      {
        selected: false,
        _id: 1,
        name: "NAndha",
        events: [1,2,3,4,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      },
      {
        selected: false,
        _id: 2,
        name: "drtfghj",
        events: [1,2,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      },
      {
        selected: false,
        _id: 3,
        name: "NAndha",
        events: [1,2,3,4,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      },
      {
        selected: false,
        _id: 4,
        name: "NAndha",
        events: [1,2,3,4,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      },
      {
        selected: false,
        _id: 5,
        name: "NAndha",
        events: [1,2,3,4,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      },
      {
        selected: false,
        _id: 6,
        name: "NAndha",
        events: [1,2,3,4,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      },
      {
        selected: false,
        _id: 7,
        name: "NAndha",
        events: [1,2,3,4,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      },
      {
        selected: false,
        _id: 8,
        name: "NAndha",
        events: [1,2,3,4,5],
        phoneNo: "12345667",
        email: "nandha1nks@gmail.com",
        college: "sdfghjtrgh",
        city: "resdtfghjk",
        state: "dfghjnm"
      }
    ]
  };
  columns = [
    { title: 'Name', field: 'name' },
    { title: 'Phone', field: 'phoneNo' },
    { title: 'College', field: 'college'},
    { title: 'City', field: 'city' },
  ];
  tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  render(){
    return(
      <React.Fragment>
    <MaterialTable style={{margin:100}}
      title="Editable Example"
      columns={this.columns}
      data={this.state.data}
      icons = {this.tableIcons}
      options={{filtering: false}}
    />
    <button onclick={()=>{this.setState({data:[]});}}>Cick</button>
    </React.Fragment>
  );

  }
}

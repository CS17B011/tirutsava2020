import React, {Component, forwardRef} from 'react';
import MaterialTable from 'material-table';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
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


export default class Event extends Component {

  state = {
    viewModal: false,
    columns: [
      { title: 'Event Name', field: 'name' },
      { title: 'Venue', field: 'venue' },
      { title: 'Entry Fee', field: 'entryFee', type: 'numeric' },
      { title: 'Price', field: 'price', type: 'numeric' },
      { title: 'Date', field: 'date'}
    ],
    data: [
      {
        name: "Nandha",
        date: "10/11/2019",
        time: "20:30",
        venue: "Tirupati",
        entryFee: 200,
        price: 200,
        typeOfEvent: "Offline",
        coordinatorContact: [
          {
            coorName: "Nandhakumar",
            coorMail: "summa@summa.in",
            coorPhone: "9999999999"
          },
          {
              coorName: "Nandhakumar",
              coorMail: "summa@summa.in",
              coorPhone: "9999999999"
          }
        ]
      },
      {
        name: "",
        date: "",
        time: "",
        venue: "",
        entryFee: "",
        price: "",
        typeOfEvent: "",
        coordinatorContact: []
      },
      {
        name: "",
        date: "",
        time: "",
        venue: "",
        entryFee: "",
        price: "",
        typeOfEvent: "",
        coordinatorContact: []
      },
      {
        name: "Nandha",
        date: "10/11/2019",
        time: "20:30",
        venue: "Tirupati",
        entryFee: 200,
        price: 200,
        typeOfEvent: "Offline",
        coordinatorContact: [
          {
            coorName: "Nandhakumar",
            coorMail: "summa@summa.in",
            coorPhone: "9999999999"
          },
          {
              coorName: "Nandhakumar",
              coorMail: "summa@summa.in",
              coorPhone: "9999999999"
          }
        ]
      },
      {
        name: "",
        date: "",
        time: "",
        venue: "",
        entryFee: "",
        price: "",
        typeOfEvent: "",
        coordinatorContact: []
      },
      {
        name: "",
        date: "",
        time: "",
        venue: "",
        entryFee: "",
        price: "",
        typeOfEvent: "",
        coordinatorContact: []
      },
      {
        name: "Nandha",
        date: "10/11/2019",
        time: "20:30",
        venue: "Tirupati",
        entryFee: 200,
        price: 200,
        typeOfEvent: "Offline",
        coordinatorContact: [
          {
            coorName: "Nandhakumar",
            coorMail: "summa@summa.in",
            coorPhone: "9999999999"
          },
          {
              coorName: "Nandhakumar",
              coorMail: "summa@summa.in",
              coorPhone: "9999999999"
          }
        ]
      },
      {
        name: "",
        date: "",
        time: "",
        venue: "",
        entryFee: "",
        price: "",
        typeOfEvent: "",
        coordinatorContact: []
      },
      {
        name: "",
        date: "",
        time: "",
        venue: "",
        entryFee: "",
        price: "",
        typeOfEvent: "",
        coordinatorContact: []
      }
    ],
    displayData: {
      name: "",
      date: "",
      time: "",
      venue: "",
      entryFee: "",
      price: "",
      typeOfEvent: "",
      coordinatorContact: [],
      row: -1
    }
  }
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
}
  viewToggle = (index = -1) => {
    if(index != -1)
      this.setState({displayData : {...this.state.data[index], row: index},viewModal:true});
    else {
      this.setState({displayData: {
        name: "",
        date: "",
        time: "",
        venue: "",
        entryFee: "",
        price: "",
        typeOfEvent: "",
        coordinatorContact: [],
        row: -1
      },viewModal: false});
    }
    console.log(this.state.displayData);
  }
  submitModal = (e) => {
    e.preventDefault();
    if(this.state.displayData.row === -1){
      let dataAdd = this.state.displayData;
      console.log(dataAdd);
      this.setState({
          data : [...this.state.data, dataAdd],
          editModal: false,
          viewModal: false,
          displayData: {
              name: "",
              date: "",
              time: "",
              venue: "",
              entryFee: "",
              price: "",
              typeOfEvent: "",
              coordinatorContact: [],
              row: -1
          }
      });
    }
    else{
      let dataAdd = this.state.displayData;
      delete dataAdd['id'];
      var data = this.state.data;
      data[this.state.displayData.row] = dataAdd;
      this.setState({
        data: data,
        editModal: false,
        viewModal: true
      });
      console.log("enyet");
    }
  }
  editToggle = () => {
    if(this.state.displayData.row == -1){
      this.setState({editModal:!this.state.editModal});}
    else {
      this.setState({viewModal:!this.state.viewModal,editModal:!this.state.editModal});
    }
  }
  eventHandler = (e) => {
    var data = this.state.displayData;
    data[e.target.name] = e.target.value;
    this.setState({displayData:data})}
  render(){
    return (
      <div className="container" style={{marginTop:150}}>
      <button onClick={(event) => this.editToggle()}>Click</button>
      <Modal isOpen={this.state.viewModal} toggle={() =>this.viewToggle({})} style = {{marginTop:100}}>
        <ModalHeader toggle={()=>this.viewToggle()}></ModalHeader>
        <ModalBody>
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button onClick={()=>{this.setState({viewModal:false,editModal:true})}}>Button</Button>
          </CardBody>
        </Card>
        </ModalBody>
      </Modal>
      <Modal isOpen={this.state.editModal} toggle={this.editToggle} style = {{marginTop:100}}>
          <ModalHeader toggle={this.editToggle}>Edit the Education Detail</ModalHeader>
          <ModalBody>
          <form onSubmit={this.submitModal} id="inputEvent" name="inputEvent">
           <input type="text" className="form-control" name={"name"} placeholder="name" value={this.state.displayData.name}
            onChange={this.eventHandler}/>
           <input type="text" className="form-control" name={"venue"} placeholder="Venue" value={this.state.displayData.venue}
            onChange = {this.eventHandler}/>
          </form>
          </ModalBody>
          <ModalFooter>
             <button type="submit" form="inputEvent">Submit</button>
            <Button color="secondary" onClick={this.editToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      <MaterialTable
        style ={{marginTop:100}}
        icons = {this.tableIcons}
        title="Events"
        columns={this.state.columns}
        data={this.state.data}
        onRowClick = {(event, row) => this.viewToggle(row.tableData.id)}
        filterable
        editable={{

          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.splice(data.indexOf(oldData), 1);
                this.setState({ ...this.state, data });
              }, 600);
            }),
        }}
      />
      </div>
    );
  }
}

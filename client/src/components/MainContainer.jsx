import React, { Component } from 'react';
import axios from 'axios';
import PhotoGallery from './PhotoGallery.jsx';
import PhotoViewer from './PhotoViewer.jsx';
import styled from 'styled-components';

const MasterDiv = styled.div`
height: 100%;
width: 100%;
`;

const GalleryContainer = styled.div`
display: flex;
height: ${innerHeight - 20}px;
width: 620px;
overflow-y: scroll;
flex-direction: column;
cursor: pointer;
`;

const PhotoViewerContainer = styled.div`
position: absolute;
display: flex;
overflow: scroll;
width: 100%;
height: 100%;
top: 0px;
left: 0px;
z-index: 3;
flex-direction: column;
`;

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'],
      status: '',
      price: '',
      beds: '',
      baths: '',
      area: '',
      imageCount: 1,
      selectedPic: '',
      id: 0,
      popout: false,
      saved: false,
      // id: 0,
      // address: '',
      // description: '',
      // popout: false,
      // selectedPic: '',
      // imageCount: 1,
      // saved: false,
    };
    // this.retrieveImages = this.retrieveImages.bind(this);
    this.viewerPopout = this.viewerPopout.bind(this);
    this.imageClick = this.imageClick.bind(this);
    this.closePopout = this.closePopout.bind(this);
    this.nextPic = this.nextPic.bind(this);
    this.prevPic = this.prevPic.bind(this);
    this.restartGallery = this.restartGallery.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.saveHouse = this.saveHouse.bind(this);
    this.retrieveHouse = this.retrieveHouse.bind(this);
  }

  componentDidMount() {
    this.retrieveHouse();
  }

  restartGallery() {
    this.setState({ selectedPic: 0 });
  }

  nextPic() {
    if (this.state.selectedPic + 1 === this.state.imageCount) {
      this.setState({ selectedPic: 0 });
    } else {
      this.setState({ selectedPic: parseInt(this.state.selectedPic) + 1 });
    }
  }

  prevPic() {
    if (this.state.selectedPic === 0) {
      this.setState({ selectedPic: parseInt(this.state.imageCount) - 1 });
    } else {
      this.setState({ selectedPic: parseInt(this.state.selectedPic) - 1 });
    }
  }

  viewerPopout() {
    this.setState({ popout: true });
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  closePopout() {
    this.setState({ popout: false, selectedPic: '' });
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  saveHouse() {
    this.setState({ saved:!this.state.saved });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.nextPic();
    } else if (event.keyCode === 37) {
      this.prevPic();
    }
  }

  imageClick(event) {
    this.viewerPopout();
    this.setState({ selectedPic: parseInt(event.target.id) });
  }

  retrieveHouse() {
    axios.get(`/houses/${id}`)
      .then((response) => {
        const house = response.data;
        this.setState({
          id: house.house_id,
          status: house.status,
          price: house.price,
          beds: house.beds,
          baths: house.baths,
          area: house.area,
        });
        axios.get(`/house/${id}/image`)
          .then((response) => {
            const image = response.data;
            console.log(image);
            this.setState({
              images: image.image_url,
              imageCount: image.image_url.length,
            });
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  }

  // retrieveImages() {
  //   axios.get(`/house/${id}/image`)
  //     .then((response) => {
  //       const house = response.data;
  //       console.log(house);
  //       this.setState({
  //         images: house.images,
  //         description: house.description,
  //         id: house.id,
  //         address: house.address,
  //         imageCount: house.images.length,
  //       });
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // }

  render() {
    return (
      <MasterDiv>
        <GalleryContainer>
          <PhotoGallery images={this.state.images} click={this.imageClick} />
        </GalleryContainer>
        {this.state.popout && (<PhotoViewerContainer>
          <PhotoViewer save={this.saveHouse} saved={this.state.saved} photo={this.state.images[this.state.selectedPic]} close={this.closePopout} next={this.nextPic} prev={this.prevPic} description={this.state.description} total={this.state.imageCount} current={this.state.selectedPic} restart={this.restartGallery}/>
          </PhotoViewerContainer>)}
      </MasterDiv>
    );
  }
}

export default MainContainer;

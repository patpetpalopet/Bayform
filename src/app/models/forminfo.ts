export const Forminfo = function (data?: any) {
  if (data) {
    this.Location = data.Location;
    this.Descriotion = data.Descriotion;
    this.ComputerInfo = JSON.parse(data.Location);
    this.RequestorId = data.RequestorId;
    this.RequestorMail = data.RequestorMail;
    this.Status = data.Status;
    this.ApproveState = JSON.parse(data.ApproveState);
    this.ServiceSelect = JSON.parse(data.ServiceSelect);
    this.ID = data.ID;
  } else {
    this.Location = '';
    this.Descriotion = '';
    this.ComputerInfo = {
      cn: '',
      brand: '',
      sn: '',
      pc: '',
      date: '',
    };
    this.RequestorId = 0;
    this.RequestorMail = '';
    this.Status = 'pending';
    this.ApproveState = {
      A1: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A2: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A3: {
        emId: 0,
        Status: '',
        comment: ''
      }
    };
    this.ServiceSelect = {
      divice: false,
      diviceid: 0,
      vpn: false,
      vpnid: 0,
      social: false,
      socialid: 0
    };
  }
};
export const DiviceService = function (data?: any) {
  if (data) {
    this.ID = data.ID;
    this.DeviceSelect = JSON.parse(data.DeviceSelect);
    this.ReqId = data.ReqId;
    this.Status = data.Status;
    this.Descriprion = data.Descriprion;
    this.ApproveState = JSON.parse(data.ApproveState);
  } else {
    this.DeviceSelect = {
      cdrom: {
        Title: 'CD-ROM',
        IsSelect: false
      },
      thumb: {
        Title: 'Thumb Drive/Memory Card',
        IsSelect: false
      },
      bluetooth: {
        Title: 'Bluetooth',
        IsSelect: false
      },
      other: {
        Title: '',
        IsSelect: false
      }
    };
    this.Descriprion = '';
    this.ReqId = 0;
    this.Status = 'pending';
    this.ApproveState = {
      A1: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A2: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A3: {
        emId: 0,
        Status: '',
        comment: ''
      }
    };
  }
};
export const VPNService = function (data?: any) {
  if (data) {
    this.ID = data.ID;
    this.Description = data.Description;
    this.ReqId = data.ReqId;
    this.Status = data.Status;
    this.ApproveState = JSON.parse(data.ApproveState);
  } else {
    this.Description = '';
    this.ReqId = 0;
    this.Status = 'pending';
    this.ApproveState = {
      A1: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A2: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A3: {
        emId: 0,
        Status: '',
        comment: ''
      }
    };
  }
};
export const SocialService = function (data?: any) {
  if (data) {
    this.ID = data.ID;
    this.Description = data.Description;
    this.ReqId = data.ReqId;
    this.Status = data.Status;
    this.SocialSelect = JSON.parse(data.SocialSelect);
    this.ApproveState = JSON.parse(data.ApproveState);
  } else {
    this.Description = '';
    this.ReqId = 0;
    this.Status = 'pending';
    this.SocialSelect = {
      facebook: {
        Title: 'Facebook',
        IsSelect: false
      },
      line: {
        Title: 'Line',
        IsSelect: false
      },
      youtube: {
        Title: 'Youtube',
        IsSelect: false
      },
      google: {
        Title: 'Google Drive etc',
        IsSelect: false
      },
      other: {
        Title: '',
        IsSelect: false
      }
    };
    this.ApproveState = {
      A1: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A2: {
        emId: 0,
        Status: '',
        comment: ''
      },
      A3: {
        emId: 0,
        Status: '',
        comment: ''
      }
    };
  }
};

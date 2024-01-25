
export type campaign = {
  id : number,
  campaign_name: string,
  is_dark_web  : boolean,
  is_public_web : boolean,
  target :Object,
  platform : Array<string>,
  start_date : Date,
  end_date : Date,
};

export type workspace = {
  id : number , 
  workspace_name : string,
  creator_user_id : number,
  owner_user_id : number,
  campaign : Array<campaign>,
  collobrator : Array<string>,
};

export type user = {
  id : number,
  email : string,
  is_active : boolean,
  is_superuser : boolean,
  full_name : string,
}



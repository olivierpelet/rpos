///<reference path="../../lib/extension.ts"/>
interface rposConfig {
  NetworkAdapters: string[];
  IpAddress: string;
  ServicePort: number;
  RTSPPort: number;
  RTSPName: string;
  DeviceInformation: DeviceInformation;
  logLevel: number;
  logSoapCalls: Boolean;
}

interface DeviceInformation {
  Manufacturer: string;
  Model: string;
  HardwareId: string;
  SerialNumber: string;
  FirmwareVersion: string;
}

interface TypeConstructor extends Function {
  name: string;
}

interface SoapServiceOptions {
  path: string,
  services: any,
  xml: any,
  wsdlPath: string,
  onReady: () => void;
}

interface Date {
  stdTimezoneOffset: () => number;
  dst: () => boolean;
}

interface UserControlOptions<T> {
  stringify?: (T) => string,
  range?: {
    min: T,
    max: T,
    allowZero?: boolean,
    step?: T
  }
  lookupSet?: UserControlsLookupSet<T>;
}

interface UserControlsLookup<T> {
  value: T;
  desc: string;
}
interface UserControlsLookupSet<T> extends Array<UserControlsLookup<T>> {

}

interface Resolution {
  Width: number;
  Height: number;
}
interface CameraSettingsParameter {
  gop: number; //keyframe every X sec.
  resolution: Resolution;
  framerate: number;
  bitrate: number;
  profile: string;
  quality: number;
}
interface CameraSettings extends CameraSettingsParameter {
  drc: number; //0=OFF, 1=LOW, 2=MEDIUM, 3=HIGH
  hf: boolean; //horizontal flip
  vf: boolean; //vertical flip
  forceGop: boolean;
  exposure: string;
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./../common";

export type MedicStruct = {
  addr: PromiseOrValue<string>;
  name: PromiseOrValue<string>;
  url: PromiseOrValue<string>;
};

export type MedicStructOutput = [string, string, string] & {
  addr: string;
  name: string;
  url: string;
};

export interface IMedicsBookInterface extends utils.Interface {
  functions: {
    "existMedic(address)": FunctionFragment;
    "getMedic(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "existMedic" | "getMedic"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "existMedic",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMedic",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "existMedic", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMedic", data: BytesLike): Result;

  events: {};
}

export interface IMedicsBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMedicsBookInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    existMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[MedicStructOutput]>;
  };

  existMedic(
    _medic: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getMedic(
    _medic: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<MedicStructOutput>;

  callStatic: {
    existMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<MedicStructOutput>;
  };

  filters: {};

  estimateGas: {
    existMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    existMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMedic(
      _medic: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}